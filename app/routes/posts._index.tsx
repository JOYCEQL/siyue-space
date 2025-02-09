import { Link } from "@remix-run/react";

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
    excerpt:
      "在2024年4月，我做了一个重要的决定，离开杭州来到成都。这篇文章记录了我的思考过程和对未来的期待。",
    date: "2024-04-01",
    tags: ["生活", "思考"],
  },
  {
    id: "2",
    title: "React 性能优化实践",
    excerpt:
      "分享在实际项目中常用的 React 性能优化技巧，包括代码分割、懒加载、状态管理等方面的最佳实践。",
    date: "2024-03-15",
    tags: ["React", "性能优化", "前端"],
  },
  {
    id: "3",
    title: "SwiftUI vs React Native",
    excerpt: "对比 SwiftUI 和 React Native 在开发体验、性能、生态等方面的优劣势。",
    date: "2024-02-20",
    tags: ["SwiftUI", "React Native", "移动开发"],
  },
];

export default function PostsIndex() {
  return (
    <>
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

      <div className="relative space-y-8">
        {/* 时间线背景 */}
        <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-800" />

        {posts.map(post => (
          <article key={post.id} className="group relative pl-8 md:pl-10">
            {/* 时间线圆点 */}
            <div className="absolute left-[-4px] top-4 h-2 w-2 rounded-full bg-gray-300 transition-colors group-hover:bg-code-green dark:bg-gray-700 dark:group-hover:bg-code-green" />

            <Link
              to={`/posts/${post.id}`}
              className="block rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-md dark:border-gray-800"
            >
              <div className="mb-4 flex items-center justify-between">
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
                <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
              </div>

              <h2 className="mb-2 text-xl font-bold group-hover:text-code-green md:text-2xl">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
