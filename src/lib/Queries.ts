"use client";

import {
  CreateBlogPost,
  CreateMetaReport,
  DeleteBlogPost,
  EditBlogPost,
  EditMetaReport,
  UpdateSpellAbout,
  UpdateSpellBuild,
  UpdateSpellReview,
} from "@/server/createActions";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  SpellAboutInput,
  SpellBuildInput,
  SpellReviewInput,
  Tier,
} from "./types";
import { getSpellAbout } from "@/server/fetchActions";
import { useRouter } from "next/navigation";

/// Meta Reports ==================================================

export function useCreateMetaReportMutate() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: {
      title: string;
      content: string;
      tierlist: Tier[];
    }) => {
      return await CreateMetaReport(data.title, data.content, data.tierlist);
    },
    onSuccess(id) {
      queryClient.invalidateQueries({
        queryKey: ["metas"],
      });
      router.replace("/meta-report/" + id);
    },
  });
  return [mutation] as const;
}

export function useEditMetaReportMutate() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: {
      id: number;
      title: string;
      content: string;
      tierlist: Tier[];
    }) => {
      return await EditMetaReport(
        data.id,
        data.title,
        data.content,
        data.tierlist,
      );
    },
    onSuccess(id) {
      queryClient.invalidateQueries({
        queryKey: ["metas"],
      });
      router.replace("/meta-report/" + id);
    },
  });
  return [mutation] as const;
}

/// Blog Pages ====================================================

export function useCreateBlogMutate() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: {
      title: string;
      content: string;
      category: string;
    }) => {
      return await CreateBlogPost(data.title, data.content, data.category);
    },
    onSuccess(id) {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      router.replace("/guide/" + id);
    },
  });
  return [mutation] as const;
}

export function useEditBlogMutate() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: {
      id: string;
      title: string;
      content: string;
      category: string;
    }) => {
      return await EditBlogPost(
        data.id,
        data.title,
        data.content,
        data.category,
      );
    },
    onSuccess(id) {
      queryClient.invalidateQueries({
        queryKey: ["blog", id],
      });
      router.replace("/guide/" + id);
    },
  });
  return [mutation] as const;
}

export function useDeleteBlogMutate() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: { id: string }) => {
      return await DeleteBlogPost(data.id);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      router.replace("/");
    },
  });

  return [mutation] as const;
}

/// Spell Pages ====================================================

export function useUpdateSpellAboutMutate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: {
      spellname: string;
      aboutData: SpellAboutInput;
    }) => {
      return await UpdateSpellAbout(data.spellname, data.aboutData);
    },
    onSuccess(spellName, variables) {
      queryClient.invalidateQueries({
        queryKey: ["about", variables.spellname],
      });
      // queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });
  return [mutation] as const;
}

export function useSpellAboutQuery(spellName: string) {
  const query = useSuspenseQuery({
    queryKey: ["about", spellName],
    queryFn: async () => await getSpellAbout(spellName),
  });
  return [query.data, query] as const;
}

export function useUpdateSpellBuildMutate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: {
      spellname: string;
      buildData: SpellBuildInput;
    }) => {
      return await UpdateSpellBuild(data.spellname, data.buildData);
    },
    onSuccess(spellName, variables) {
      queryClient.invalidateQueries({
        queryKey: ["build", variables.spellname],
      });
      // queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });
  return [mutation] as const;
}

export function useUpdateSpellReviewMutate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: {
      spellname: string;
      reviewData: SpellReviewInput;
    }) => {
      return await UpdateSpellReview(data.spellname, data.reviewData);
    },
    onSuccess(spellName, variables) {
      queryClient.invalidateQueries({
        queryKey: ["review", variables.spellname],
      });
    },
  });
  return [mutation] as const;
}
