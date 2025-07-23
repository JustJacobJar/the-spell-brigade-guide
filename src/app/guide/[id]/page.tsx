"use server";

import { MyMDXViewer } from "@/components/markup/ForwardRefEditor";
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
    <div className="flex h-full w-full max-w-7xl">
      <MyMDXViewer markdown={blog.content.content} />
    </div>
  );
}
