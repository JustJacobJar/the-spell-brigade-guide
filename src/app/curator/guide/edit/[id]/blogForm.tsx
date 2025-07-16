"use client";
import DeleteButtonModal from "@/components/DeleteButtonModal";
import InitializedMDXEditor from "@/components/markup/InitializedMDXEditor";
import { useEditBlogMutate } from "@/lib/Queries";
import { GuideCategorys } from "@/lib/types";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef, useState } from "react";

export default function EditGuideForm({
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
  const editor = useRef<MDXEditorMethods>(null);
  const [title, setTitle] = useState(blogTitle);
  const [content, setContent] = useState(blogContent);
  const [category, setCategory] = useState(blogCategory);

  const [mutateEdit] = useEditBlogMutate();
  function onSubmitData() {
    mutateEdit.mutate({
      id: id,
      title: title,
      content: content,
      category: category,
    });
    return;
  }

  return (
    <div className="flex w-5xl flex-col place-self-center">
      <div>
        <input
          className="w-96 rounded-xl bg-neutral-700 p-2"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          placeholder={"TierListName"}
        />
        <select
          className="w-96 rounded-xl bg-neutral-700 p-2"
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
          defaultValue={category}
        >
          <option disabled value={"DEFAULT"}>
            Pick a Category
          </option>
          {...GuideCategorys.map((li, index) => (
            <option key={index} value={li}>
              {li}
            </option>
          ))}
        </select>
      </div>
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
