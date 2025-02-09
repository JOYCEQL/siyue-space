import { createContext, useContext, useEffect, useState } from "react";
import { useFetcher } from "@remix-run/react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme | null;
  toggleTheme: () => void;
}>({ theme: null, toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme | null;
}

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(() => defaultTheme || null);
  const fetcher = useFetcher();

  const persistTheme = (newTheme: Theme) => {
    fetcher.submit(
      { theme: newTheme },
      { action: "/api/theme", method: "post" }
    );
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    persistTheme(newTheme);
  };

  useEffect(() => {
    if (defaultTheme) {
      setTheme(defaultTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : prefersDark
      ? "dark"
      : "light";
    setTheme(initialTheme);
  }, [defaultTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
