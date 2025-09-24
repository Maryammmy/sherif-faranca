import { foucsAreaAPI, recentWatchedAPI } from "./../services/queries/home";
import {
  classesAPI,
  discoverProgramsAPI,
  homeAPI,
  recommendForYouAPI,
} from "@/src/services/queries/home";
import { useCustomInfiniteQuery, useCustomQuery } from ".";

export function useHome() {
  return useCustomQuery(["home"], homeAPI);
}
export function useRecentWatched() {
  return useCustomInfiniteQuery(
    ["recentWatched"],
    async ({ pageParam = 1 }) => {
      return recentWatchedAPI(pageParam); // خلي API يستقبل رقم الصفحة
    },
    {
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage?.data?.pagination;
        if (!pagination) return undefined;

        if (pagination.pageNumber < pagination.totalPages) {
          return pagination.pageNumber + 1;
        }

        return undefined;
      },
    }
  );
}
export function useRecommendForYou() {
  return useCustomInfiniteQuery(
    ["recommendForYou"],
    async ({ pageParam = 1 }) => {
      return recommendForYouAPI(pageParam);
    },
    {
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        // حسب الـ pagination اللي بيرجعه الـ API
        const pagination = lastPage?.data?.pagination;
        if (pagination?.pageNumber < pagination?.totalPages) {
          return pagination.pageNumber + 1;
        }
        return undefined;
      },
    }
  );
}

export function useFoucsAreas() {
  return useCustomQuery(["foucsArea"], foucsAreaAPI);
}
export function useClasses(focusAreaId: number | null) {
  return useCustomInfiniteQuery(
    ["classes", focusAreaId],
    async ({ pageParam = 1 }) => {
      return classesAPI(focusAreaId, pageParam);
    },
    {
      enabled: !!focusAreaId,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage?.data?.pagination;
        if (!pagination) return undefined;

        // لو لسه فيه صفحات تانية
        if (pagination.pageNumber < pagination.totalPages) {
          return pagination.pageNumber + 1;
        }

        // لو وصلنا لآخر صفحة
        return undefined;
      },
    }
  );
}

export function useDiscoverPrograms() {
  return useCustomInfiniteQuery(
    ["discoverPrograms"],
    async ({ pageParam = 1 }) => {
      return discoverProgramsAPI(pageParam);
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
