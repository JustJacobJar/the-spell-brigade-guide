"use client";

import {
  CreateBlogPost,
  createTierlist,
  DeleteBlogPost,
  EditBlogPost,
  UpdateSpellAbout,
} from "@/server/createActions";
import useSWRMutation from "swr/mutation";
import { SpellAbout, Tier } from "./types";
import useSWR from "swr";
import { getAllGuides, getBlogPost } from "@/server/fetchActions";
import { useRouter } from "next/navigation";

export function useCreateTierListSWR(
  tierList: Tier[],
  title: string,
  description: string,
) {
  const { data, error, isMutating, trigger } = useSWRMutation(
    "createTierList",
    () => createTierlist(tierList, title, description),
    { throwOnError: false },
  );

  return { data, error, isMutating, trigger } as const;
}

export function useCreateBlogPostSWR(title: string, content: string) {
  const router = useRouter();

  const { data, error, isMutating, trigger } = useSWRMutation(
    "createBlogPost",
    () => CreateBlogPost(title, content),
    {
      throwOnError: false,
      onSuccess(data) {
        router.replace("/guide/" + data);
      },
    },
  );

  return { data, error, isMutating, trigger } as const;
}

export function useEditBlogPostSWR(id: string, title: string, content: string) {
  const router = useRouter();

  const { data, error, isMutating, trigger } = useSWRMutation(
    `editBlog/${id}`,
    () => EditBlogPost(id, title, content),
    {
      throwOnError: false,
      onSuccess(data) {
        router.replace("/guide/" + data);
      },
    },
  );

  return { data, error, isMutating, trigger } as const;
}

export function useDeleteBlogPostSWR(id: string) {
  const router = useRouter();

  const { data, error, isMutating, trigger } = useSWRMutation(
    `editBlog/${id}`,
    () => DeleteBlogPost(id),
    {
      throwOnError: false,
      onSuccess() {
        router.replace("/");
      },
    },
  );

  return { data, error, isMutating, trigger } as const;
}

export function useBlogPost(id: string) {
  const { data, error, isLoading } = useSWR(
    "getBlog" + id,
    () => getBlogPost(id),
    { errorRetryCount: 1 },
  );

  return { data, error, isLoading };
}

export function useAllGuides() {
  const { data, error, isLoading } = useSWR("getGuide", () => getAllGuides(), {
    errorRetryCount: 1,
  });

  return { data, error, isLoading };
}

export function useUpdateSpellAboutSWR(spellName: string, aboutData:SpellAbout) {
  const { data, error, isMutating, trigger } = useSWRMutation(
    `update/about/${spellName}`,
    () => UpdateSpellAbout(spellName, aboutData),
    {
      throwOnError: false,
      onSuccess() {
        //return it is success
        //repopulate page with optimistic data entered
      },
    },
  );

  return { data, error, isMutating, trigger } as const;
}