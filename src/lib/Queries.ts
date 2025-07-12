"use client";

import { UpdateSpellAbout, UpdateSpellBuild } from "@/server/createActions";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { SpellAboutInput, SpellBuildInput } from "./types";
import { getSpellAbout } from "@/server/fetchActions";

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
