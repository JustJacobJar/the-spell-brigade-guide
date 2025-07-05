"use client";
import EditGuideForm from "./blogForm";
import { use } from "react";
import { useBlogPost } from "@/lib/SwrHooks";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function EditGuidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data, error, isLoading } = useBlogPost(id);

  return isLoading ? (
    <LoadingSpinner />
  ) : error ? (
    <p>error.message</p>
  ) : data ? (
    <div className="w-full">
      <EditGuideForm
        id={id}
        blogTitle={data.blog.title}
        blogContent={data.content.content}
      />
    </div>
  ) : (
    <p>Post couldnt be found (should never see this )</p>
  );
}
