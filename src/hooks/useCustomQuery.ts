import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";

export function useCustomQuery<TData>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<
    UseQueryOptions<TData, unknown, TData, QueryKey>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<TData, unknown, TData, QueryKey>({
    queryKey,
    queryFn,
    ...options,
  });
}
