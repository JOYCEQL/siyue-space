import type { MetaFunction } from "@remix-run/node";
import { Globe } from "lucide-react";

export const meta: MetaFunction = () => {
  return [{ title: "产品 - SiYue Space" }, { name: "description", content: "SiYue 的产品" }];
};

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { name: string }[];
  links: { type: "website" | "source"; url: string }[];
}

const PROJECTS: Project[] = [
  {
    title: "Magic Resume",
    description: "一款AI驱动的开源简历编辑器，丝滑流畅的用户体验",
    image: "/images/projects/magic-resume.png",
    technologies: [
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "TailwindCSS" },
      { name: "Shadcn UI" },
      { name: "Motion" },
      { name: "TipTap" },
      { name: "Serverless" },
    ],
    links: [
      { type: "website", url: "https://magicv.art" },
      { type: "source", url: "https://github.com/JOYCEQL/magic-resume" },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:scale-[1.02] dark:border-gray-800 dark:bg-white/5">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech.name}
              className="rounded-md bg-gray-100 px-2 py-1 text-[10px] dark:bg-white/10"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.map(link => (
            <a
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-2 py-1 text-[10px] font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              {link.type === "website" ? (
                <>
                  <Globe className="h-4 w-4" />
                  Website
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Source
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">产品</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
