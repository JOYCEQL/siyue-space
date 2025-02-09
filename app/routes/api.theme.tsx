import { json, type ActionFunctionArgs } from "@remix-run/node";
import { themeCookie } from "~/utils/theme.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const theme = formData.get("theme");

  return json(
    { success: true },
    {
      headers: {
        "Set-Cookie": await themeCookie.serialize(theme),
      },
    }
  );
};
