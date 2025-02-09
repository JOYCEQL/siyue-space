interface SkillProps {
  name: string;
}

function Skill({ name }: SkillProps) {
  return (
    <div className="rounded-[6px] dark:bg-white dark:text-black dark:hover:bg-white/80  bg-gray-900 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20">
      {name}
    </div>
  );
}

interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="mb-16">
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
