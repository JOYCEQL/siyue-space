import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/utils/mdx.server";
import type { Post } from "~/utils/mdx.server";

export const loader: LoaderFunction = async () => {
  const posts = await getAllPosts();
  return json({ posts });
};

export default function PostsIndex() {
  const { posts } = useLoaderData<{ posts: Post[] }>();

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
          <article key={post.slug} className="group relative pl-8 md:pl-10">
            {/* 时间线圆点 */}
            <div className="absolute left-[-4px] top-4 h-2 w-2 rounded-full bg-gray-300 transition-colors group-hover:bg-code-green dark:bg-gray-700 dark:group-hover:bg-code-green" />

            <Link
              to={post.slug}
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
              <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
