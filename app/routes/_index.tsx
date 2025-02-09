import type { MetaFunction } from "@remix-run/node";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Avatar } from "~/components/Avatar";
import { SocialLinks } from "~/components/SocialLinks";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Header } from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "SiYue Space" },
    { name: "description", content: "Personal blog and portfolio" },
  ];
};

const socialLinks = [
  {
    href: "https://github.com/JOYCEQL/magic-resume",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    label: "GitHub",
  },
];

const skills = ["React", "Vue", "Taro", "Next.js", "Typescript", "Node.js"];

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafaf9] text-gray-900 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="min-h-screen rounded-2xl bg-white shadow-sm dark:bg-white/10">
          <Header />
          <main className="p-8 md:p-12">
            {/* Hero Section */}
            <div className="mb-16 flex flex-row-reverse items-start justify-between gap-8">
              <div className="relative shrink-0">
                <Avatar src="/images/avatars/avatar.jpeg" alt="SiYue" size="lg" />
              </div>
              <div className="max-w-2xl text-left">
                <h1 className="mb-4 flex items-center gap-3 text-4xl font-bold md:text-6xl">
                  Hi, I'm SiYue
                  <span role="img" aria-label="waving hand" className="inline-block">
                    👋
                  </span>
                </h1>
                <p className="mb-4 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl">
                  一名不是很全栈的前端工程师。热爱创造事物并帮助他人。
                </p>
                <SocialLinks links={socialLinks} />
              </div>
            </div>

            {/* About Section */}
            <section className="mb-16">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">关于我</h2>
              <p className="text-gray-600 dark:text-gray-300">
                在2024年4月，做了一个决定，放弃原有的事业从杭州来到成都，一切正在悄悄变化...
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-16">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">技能</h2>
              <Skills skills={skills} />
            </section>

            {/* Projects Section */}
            <section className="mb-16">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">产品</h2>
              <Projects />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
