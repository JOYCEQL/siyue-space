import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await readdir(POSTS_PATH);
  const posts = await Promise.all(
    files
      .filter((file) => /\.mdx?$/.test(file))
      .map(async (file) => {
        const filePath = path.join(POSTS_PATH, file);
        const source = await readFile(filePath, "utf8");
        const { data, content } = matter(source);
        
        return {
          slug: file.replace(/\.mdx?$/, ""),
          title: data.title,
          date: data.date.toISOString().split("T")[0],
          description: data.description,
          tags: data.tags,
          content,
        };
      })
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = await readFile(filePath, "utf8");
    const { data, content } = matter(source);

    const { code } = await bundleMDX({
      source: content,
      files: {},
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? [])];
        options.rehypePlugins = [...(options.rehypePlugins ?? [])];
        return options;
      },
    });

    return {
      slug,
      title: data.title,
      date: data.date.toISOString().split("T")[0],
      description: data.description,
      tags: data.tags,
      content: code,
    };
  } catch (error) {
    return null;
  }
}
