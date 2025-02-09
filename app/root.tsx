import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ThemeProvider } from "./components/ThemeProvider";
import { getTheme } from "./utils/theme.server";

import "./tailwind.css";
import "./styles/mdx.css";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  const theme = window.localStorage.getItem('theme');
                  if (theme) return theme;
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                
                function setThemeClass(theme) {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.setProperty('color-scheme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.setProperty('color-scheme', 'light');
                  }
                }

                const theme = getThemePreference();
                setThemeClass(theme);

                // 监听系统主题变化
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                  if (!window.localStorage.getItem('theme')) {
                    setThemeClass(e.matches ? 'dark' : 'light');
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#fafaf9] text-black dark:bg-black dark:text-white">
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
