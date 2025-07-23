"use client";
import { MyMDXEditor } from "@/components/markup/ForwardRefEditor";
import { useCreateBlogMutate } from "@/lib/Queries";
import { GuideCategorys } from "@/lib/types";
import { useState } from "react";

export default function ClientCreateGuidePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("# Create a Post!");
  const [category, setCategory] = useState("DEFAULT");
  const [mutateCreate] = useCreateBlogMutate();

  function onSubmitData() {
    mutateCreate.mutate({ title: title, content: content, category: category });
  }

  return (
    <div className="w-5xl place-self-center">
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
      <MyMDXEditor markdown={content} onChange={(e) => setContent(e)} />

      <button onClick={() => onSubmitData()}>Create Post</button>
    </div>
  );
}
