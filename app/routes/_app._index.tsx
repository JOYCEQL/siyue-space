import type { MetaFunction } from "@remix-run/node";
import { Introduction } from "~/components/Introduction";
import { Projects } from "~/components/Projects";
import { Skills } from "~/components/Skills";

export const meta: MetaFunction = () => {
  return [
    { title: "首页 - SiYue Space" },
    { name: "description", content: "Welcome to SiYue Space!" },
  ];
};

const skills = ["React", "Vue", "Taro", "Next.js", "Typescript", "Node.js"];

export default function Index() {
  return (
    <>
      <section className="mb-16">
        <Introduction />
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">技能</h2>
        <Skills skills={skills} />
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold">产品</h2>
        <Projects />
      </section>
    </>
  );
}
