"use server";

import { InitializedMDXViewer } from "@/components/markup/InitializedMDXEditor";
import { getBlogPost } from "@/server/fetchActions";

export default async function GuideViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = await getBlogPost(id);

  if (!blog) return <h1>Blog Content not found</h1>;

  return (
    <div className="flex max-w-7xl w-full h-full">
      <InitializedMDXViewer markdown={blog.content.content} />
    </div>
  );
}
