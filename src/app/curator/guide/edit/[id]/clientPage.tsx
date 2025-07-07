"use client";
import EditGuideForm from "./blogForm";
import { use } from "react";
import { useBlogPost } from "@/lib/SwrHooks";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function EditGuidePageClient({
  id,
  blogTitle,
  blogContent,
}: {
  id: string;
  blogTitle: string;
  blogContent: string;
}) {
  return (
    <div className="w-full">
      <EditGuideForm id={id} blogTitle={blogTitle} blogContent={blogContent} />
    </div>
  );
}
