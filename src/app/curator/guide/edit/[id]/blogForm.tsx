"use client";
import DeleteButtonModal from "@/components/DeleteButtonModal";
import { MyMDXEditor } from "@/components/markup/ForwardRefEditor";
// import { TextEditor } from "@/components/markup/TextEditor";
import { useEditBlogMutate } from "@/lib/Queries";
import { GuideCategorys } from "@/lib/types";
import { useState } from "react";

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
    <div className="flex max-w-5xl flex-col place-self-center">
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
      {/* <TextEditor></TextEditor> */}
      <MyMDXEditor markdown={content} onChange={(e) => setContent(e)} />
      <div className="flex w-full flex-row place-content-end gap-4">
        <button
          className="btn btn-secondary"
          disabled={mutateEdit.isPending}
          onClick={() => onSubmitData()}
        >
          Edit Post
        </button>
        <DeleteButtonModal id={id} />
      </div>
    </div>
  );
}
