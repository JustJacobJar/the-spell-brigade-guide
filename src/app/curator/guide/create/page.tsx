"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ClientCreateGuidePage from "./clientPage";

export default async function CreateGuidePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (
    !session ||
    (session.user.role !== "CURATOR" && session.user.role !== "ADMIN")
  ) {
    redirect("/signin");
  }

  return <ClientCreateGuidePage />;
}
