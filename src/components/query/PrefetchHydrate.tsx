import { getQueryClient } from "@/src/lib/utils";
import { dehydrate, HydrationBoundary, QueryKey } from "@tanstack/react-query";
import { ReactNode } from "react";

interface IProps {
  queryKey: QueryKey;
  queryFn: () => Promise<unknown>;
  children: ReactNode;
}

export default async function PrefetchHydrate({
  queryKey,
  queryFn,
  children,
}: IProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey, queryFn });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
