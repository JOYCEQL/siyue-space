import { NavLink } from "@remix-run/react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { MenuIcon, X as CloseIcon } from "lucide-react";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "首页", to: "/" },
  { label: "关于我", to: "/about" },
  { label: "文章", to: "/posts" },
  { label: "产品", to: "/products" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-50">
      {/* Desktop Menu */}
      <nav className="hidden items-center justify-center gap-1 py-8 md:flex">
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white/80 px-2 py-2 backdrop-blur dark:border-gray-800 dark:bg-black/80">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-white/10 ${
                  isActive ? "text-code-green" : "text-gray-600 dark:text-gray-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="ml-2 border-l border-gray-200 pl-2 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <div className="flex h-16 items-center justify-between bg-white/80 px-4 backdrop-blur dark:bg-black/80">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-black/95`}
        >
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-white/10 ${
                    isActive
                      ? "bg-gray-100 text-code-green dark:bg-white/10"
                      : "text-gray-600 dark:text-gray-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
