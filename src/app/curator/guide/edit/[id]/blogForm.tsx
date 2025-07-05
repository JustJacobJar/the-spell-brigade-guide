"use client";
import DeleteButtonModal from "@/components/DeleteButtonModal";
import InitializedMDXEditor from "@/components/markup/InitializedMDXEditor";
import { useEditBlogPostSWR } from "@/lib/SwrHooks";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef, useState } from "react";

export default function EditGuideForm({
  id,
  blogTitle,
  blogContent,
}: {
  id: string;
  blogTitle: string;
  blogContent: string;
}) {
  const editor = useRef<MDXEditorMethods>(null);
  const [title, setTitle] = useState(blogTitle);
  const [content, setContent] = useState(blogContent);
  const {
    data,
    error,
    trigger: editPost,
    isMutating,
  } = useEditBlogPostSWR(id, title, content);

  function onSubmitData() {
    editPost();
    return;
  }

  return (
    <div className="w-5xl flex flex-col place-self-center">
      <input
        className="w-96 rounded-xl bg-neutral-700 p-2"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder={"TierListName"}
      />
      <InitializedMDXEditor
        editorRef={editor}
        markdown={content}
        onChange={(e) => setContent(e)}
      />
      <div className="flex w-full flex-row place-content-end gap-4">
        <button onClick={() => onSubmitData()}>Edit Post</button>
        <DeleteButtonModal id={id} />
      </div>
    </div>
  );
}
