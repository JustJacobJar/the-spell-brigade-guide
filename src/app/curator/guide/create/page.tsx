"use client";
import InitializedMDXEditor from "@/components/markup/InitializedMDXEditor";
import { useCreateBlogPostSWR } from "@/lib/SwrHooks";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef, useState } from "react";

export default function CreateGuidePage() {
  const editor = useRef<MDXEditorMethods>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("# Create a Post!");
  const {
    data,
    error,
    trigger: create,
    isMutating,
  } = useCreateBlogPostSWR(title, content);

  function onSubmitData() {
    create();
    return;
  }

  return (
    <div className="w-5xl place-self-center">
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

      <button onClick={() => onSubmitData()}>Create Post</button>
    </div>
  );
}
