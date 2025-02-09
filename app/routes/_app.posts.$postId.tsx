import { Link, useParams } from "@remix-run/react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

// 模拟文章数据
const posts = {
  "1": {
    title: "从杭州到成都：我的2024新起点",
    content: `

在2024年4月，我做了一个重要的决定，离开杭州来到成都。这是一个全新的开始，充满了挑战和机遇。

## 为什么选择成都？

- 生活节奏更适合
- 美食之都
- 文化氛围浓厚
- 科技产业发展迅速

## 新的期待

在这里，我希望能够：

1. 继续深耕技术领域
2. 结识更多志同道合的朋友
3. 体验不同的生活方式
4. 开启人生的新篇章
    `,
    date: "2024-04-01",
    tags: ["生活", "思考"],
  },
  "2": {
    title: "React 性能优化实践",
    content: `
# React 性能优化实践

在构建大型 React 应用时，性能优化是一个永恒的话题。本文将分享一些实用的优化技巧。

## 常见的性能问题

1. 不必要的重渲染
2. 大量数据的处理
3. 首屏加载速度慢

## 优化策略

### 1. 使用 React.memo

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* 渲染内容 */
});
\`\`\`

### 2. 合理使用 useMemo 和 useCallback

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

### 3. 代码分割和懒加载

\`\`\`jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));
\`\`\`
    `,
    date: "2024-03-15",
    tags: ["React", "性能优化", "前端"],
  },
};

export default function Post() {
  const { postId } = useParams();
  const post = posts[postId as keyof typeof posts];

  if (!post) {
    return <h1 className="text-3xl font-bold">文章不存在</h1>;
  }

  return (
    <article className="prose prose-gray mx-auto dark:prose-invert lg:prose-lg">
      <div className="mb-8">
        <h1 className="mb-4 !mt-0">{post.title}</h1>
        <div className="mb-4 flex flex-wrap gap-2">
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
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
