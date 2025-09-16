"use client";
import EditGuideForm from "./blogForm";

export default function EditGuidePageClient({
  id,
  blogTitle,
  blogContent,
  blogCategory,
}: {
  id: string;
  blogTitle: string;
  blogContent: string;
  blogCategory: string;
}) {
  return (
    <div>
      <EditGuideForm
        id={id}
        blogTitle={blogTitle}
        blogContent={blogContent}
        blogCategory={blogCategory}
      />
    </div>
  );
}
