import { Header } from "~/components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col text-gray-900 dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="min-h-screen rounded-2xl bg-white shadow-sm dark:bg-white/10">
          <Header />
          <main className={`p-8 md:p-12 ${className}`}>{children}</main>
        </div>
      </div>
    </div>
  );
}
