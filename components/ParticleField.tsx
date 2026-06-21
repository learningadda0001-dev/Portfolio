"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ---- Ambient particle field ----
    const COUNT = 650;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      size: 0.04,
      color: new THREE.Color("#9fd8ff"),
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- 3D wireframe centerpiece: nested rotating polyhedra ----
    const group = new THREE.Group();
    group.position.set(0, 0, 0);

    const outerGeo = new THREE.IcosahedronGeometry(4.4, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#7dd3fc"),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    group.add(outer);

    const innerGeo = new THREE.IcosahedronGeometry(2.6, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#a78bfa"),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // small orbiting nodes (representing connected systems/APIs)
    const nodeGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#f5b75c") });
    const orbiters: THREE.Mesh[] = [];
    const ORBIT_COUNT = 6;
    for (let i = 0; i < ORBIT_COUNT; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat.clone());
      orbiters.push(node);
      group.add(node);
    }

    group.position.x = 4.2;
    group.rotation.x = 0.3;
    scene.add(group);

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollFactor = 0;

    function onMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    window.addEventListener("mousemove", onMouseMove);

    function onScroll() {
      scrollFactor = Math.min(window.scrollY / (window.innerHeight || 1), 1.4);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();

      points.rotation.y = t * 0.018 + mouseX * 0.06;
      points.rotation.x = mouseY * 0.03;

      outer.rotation.y = t * 0.12 + scrollFactor * 0.8;
      outer.rotation.x = t * 0.05;
      inner.rotation.y = -t * 0.18 - scrollFactor * 0.6;
      inner.rotation.x = t * 0.09;

      group.rotation.z = mouseX * 0.05;
      group.position.y = -mouseY * 0.5 - scrollFactor * 1.2;

      orbiters.forEach((node, i) => {
        const a = t * 0.5 + (i / ORBIT_COUNT) * Math.PI * 2;
        const r = 3.4 + Math.sin(t * 0.3 + i) * 0.3;
        node.position.set(
          Math.cos(a) * r,
          Math.sin(a * 1.3) * 1.6,
          Math.sin(a) * r
        );
      });

      if (!prefersReduced) {
        camera.position.x += (mouseX * 1.1 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.7 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      geometry.dispose();
      material.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      orbiters.forEach((node) => (node.material as THREE.Material).dispose());
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10 opacity-80" aria-hidden />;
}
