"use client";

import { createTierlist } from "@/server/createActions";
import useSWRMutation from "swr/mutation";
import { Tier } from "./types";

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
