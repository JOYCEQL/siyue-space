import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ThemeProvider } from "./components/ThemeProvider";
import { getTheme } from "./utils/theme.server";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const theme = await getTheme(request);
  return json({ theme });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <html lang="en" className={theme || ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
