import { createCookie } from "@remix-run/node";

export const themeCookie = createCookie("theme", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
});

export type Theme = "light" | "dark";

export async function getTheme(request: Request): Promise<Theme | null> {
  const cookieHeader = request.headers.get("Cookie");
  const theme = await themeCookie.parse(cookieHeader);
  return theme as Theme | null;
}
