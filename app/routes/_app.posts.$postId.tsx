import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, useParams } from "@remix-run/react";
import { getPost } from "~/utils/mdx.server";
import type { Post } from "~/utils/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";

export const loader: LoaderFunction = async ({ params }) => {
  const post = await getPost(params.postId!);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ post });
};

export default function Post() {
  const { postId } = useParams();
  const { post } = useLoaderData<{ post: Post }>();
  const Component = useMemo(() => getMDXComponent(post.content), [post.content]);

  return (
    <article className="prose prose-gray mx-auto dark:prose-invert lg:prose-lg">
      <header className="mb-8 not-prose">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">{post.title}</h1>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
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
      </header>
      <Component />
    </article>
  );
}
