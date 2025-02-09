import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "文章 - SiYue Space" },
    { name: "description", content: "SiYue 的技术博客和思考" },
  ];
};

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const posts: Post[] = [
  {
    id: "1",
    title: "从杭州到成都：我的2024新起点",
    excerpt: "在2024年4月，我做了一个重要的决定，离开杭州来到成都。这篇文章记录了我的思考过程和对未来的期待。",
    date: "2024-04-01",
    tags: ["生活", "思考"],
  },
  {
    id: "2",
    title: "React 性能优化实践",
    excerpt: "分享在实际项目中常用的 React 性能优化技巧，包括代码分割、懒加载、状态管理等方面的最佳实践。",
    date: "2024-03-15",
    tags: ["React", "性能优化", "前端"],
  },
  {
    id: "3",
    title: "现代前端工程化实践",
    excerpt: "探讨现代前端开发中的工程化实践，包括构建工具、CI/CD、自动化测试等方面的经验分享。",
    date: "2024-03-01",
    tags: ["前端", "工程化", "最佳实践"],
  },
];

export default function Posts() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafaf9] text-gray-900 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="min-h-screen rounded-2xl bg-white shadow-sm dark:bg-white/10">
          <Header />
          <main className="p-8 md:p-12">
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-3xl font-bold md:text-4xl">文章</h1>
              <div className="flex gap-2">
                <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/20">
                  最新
                </button>
                <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10">
                  热门
                </button>
              </div>
            </div>

            <div className="space-y-8">
              {posts.map(post => (
                <article
                  key={post.id}
                  className="group rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-md dark:border-gray-800"
                >
                  <Link to={`/posts/${post.id}`} className="block">
                    <h2 className="mb-2 text-xl font-bold group-hover:text-code-green md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-white/10 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <time className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
