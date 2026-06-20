import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="grid-overlay absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="02 / Stack" title="Technical Skills" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.title}
              title={group.title}
              icon={group.icon}
              items={group.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
