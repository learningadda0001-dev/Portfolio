import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import FloatingCube from "@/components/FloatingCube";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="grid-overlay absolute inset-0 opacity-50" />
      <FloatingCube className="absolute left-[6%] top-20" size={42} duration={16} />
      <FloatingCube className="absolute right-[8%] top-1/3" size={30} duration={11} color="rgba(167,139,250,0.35)" />
      <FloatingCube className="absolute left-[12%] bottom-10" size={24} duration={9} color="rgba(245,183,92,0.3)" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="02 / Stack" title="Technical Skills" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.title}
              title={group.title}
              icon={group.icon}
              items={group.items}
              level={group.level}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
