import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "文章 - SiYue Space" },
    { name: "description", content: "SiYue 的技术博客和思考" },
  ];
};

export default function Posts() {
  return <Outlet />;
}
