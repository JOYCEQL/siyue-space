import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "关于 - SiYue Space" }, { name: "description", content: "关于 SiYue" }];
};

export default function About() {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <h1 className="mb-8 text-4xl font-bold">代码爱好者、工程师</h1>
        <h2 className="mb-12 text-4xl font-bold">产品研究员</h2>

        <div className="space-y-8 text-gray-600 dark:text-gray-300">
          <p>
            作为一名代码爱好者和工程师，我热衷于通过技术创造有价值的产品。我相信，编程不仅仅是一种技能，更是一种将想象力转化为现实的强大工具。在我的职业生涯中，我一直致力于探索技术的边界，并将其应用于解决实际问题。
          </p>

          <p>
            我的工程背景让我能够深入理解技术的本质，而我对产品的热情则驱使我不断思考如何将技术转化为用户价值。我认为，优秀的产品不仅仅在于其技术实现，更在于它如何改善用户的生活或工作方式。这种平衡技术与用户需求的能力，是我作为产品研究员的核心竞争力。
          </p>

          <p>
            在快速变化的技术世界中，保持学习和适应新技术的能力至关重要。我不断学习新的编程语言、框架和工具，以确保我能够用最适合的技术来实现产品愿景。同时，我也密切关注行业趋势和用户行为的变化，以预测未来的产品需求。
          </p>

          <p>
            我期待能够将我的技术知识和产品洞察力结合起来，创造出既技术先进又用户友好的产品。如果你对技术、产品或创新有热情，我很乐意与你交流和合作，共同探讨如何利用技术的力量来改变世界。
          </p>
        </div>
      </div>
      <div>
        <div className="relative aspect-square overflow-hidden rounded-2xl [transform:perspective(1000px)_rotateY(-10deg)_rotateX(5deg)] hover:[transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)] transition-transform duration-500">
          <img
            src="/images/workspace.jpg"
            alt="My workspace"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-12 space-y-4">
          <a
            href="https://github.com/JOYCEQL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-code-green dark:text-gray-400 dark:hover:text-code-green "
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span>在Github上关注我</span>
          </a>

          <a
            href="mailto:18806723365@163.com"
            className="flex items-center gap-2 text-gray-600 hover:text-code-green dark:text-gray-400 dark:hover:text-code-green "
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>18806723365@163.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
