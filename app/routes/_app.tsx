import { Outlet } from "@remix-run/react";
import { Header } from "~/components/Header";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col text-gray-900 dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="min-h-screen rounded-2xl bg-white shadow-sm dark:bg-white/10">
          <Header />
          <main className="p-8 md:p-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
