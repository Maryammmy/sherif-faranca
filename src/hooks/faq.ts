import { faqAPI } from "../services/queries/faq";
import { useCustomInfiniteQuery } from "./useCustomQuery";

export function useFaq() {
  return useCustomInfiniteQuery(
    ["faq"],
    async ({ pageParam = 1 }) => {
      return faqAPI(pageParam);
    },
    {
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage?.data?.pagination;
        if (pagination?.pageNumber < pagination?.totalPages) {
          return pagination.pageNumber + 1;
        }
        return undefined;
      },
    }
  );
}
