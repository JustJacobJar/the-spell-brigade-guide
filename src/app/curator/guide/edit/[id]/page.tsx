"use server";
import EditGuidePageClient from "./clientPage";
import { getBlogPost } from "@/server/fetchActions";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function EditGuidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (
    !session ||
    (session.user.role !== "CURATOR" && session.user.role !== "ADMIN")
  ) {
    redirect("/signin");
  }

  try {
    const blog = await getBlogPost(id);
    return (
      <EditGuidePageClient
        id={blog.blog.id}
        blogTitle={blog.blog.title}
        blogContent={blog.content.content}
      />
    );
  } catch (error) {
    return <div>There was an error</div>;
  }
}
