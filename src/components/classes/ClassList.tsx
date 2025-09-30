"use client";

import { useClasses, useFoucsAreas } from "@/src/hooks";
import { SkeletonCard } from "../skeleton/Card";
import { IClass, IFoucsArea } from "@/src/interfaces/main/home";
import ClassicClassCard from "./Card";
import { EmptyStatePage } from "../ui/empty-state/EmptyStatePage";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import SwiperSlider from "../ui/SwiperSlider";
import { navBreakpoints } from "@/src/data";
import Loader from "../loader/Loader";

function ClassList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data: foucsAreas } = useFoucsAreas();
  const foucsAreaList: IFoucsArea[] = foucsAreas;

  // الفوكاس أريا + الكلاسات (بـ infinite query)
  const {
    data: classes,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useClasses(selectedId);

  // جمع كل الـ items من كل pages
  const classList: IClass[] | undefined = classes?.pages.flatMap(
    (page) => page?.data?.items?.[0]?.videos
  );
  useEffect(() => {
    if (foucsAreaList?.length > 0 && selectedId === null) {
      setSelectedId(foucsAreaList[0]?.focusAreaId);
    }
  }, [foucsAreaList, selectedId]);

  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {!foucsAreas || !classes ? (
        <SkeletonCard count={5} />
      ) : (
        foucsAreaList?.length > 0 && (
          <>
            {/* أزرار الفوكس أريا */}
            <SwiperSlider
              slides={foucsAreaList?.map(({ focusAreaId, focusAreaName }) => {
                const isSelected = selectedId === focusAreaId;
                return (
                  <Button
                    key={focusAreaId}
                    onClick={() => setSelectedId(focusAreaId)}
                    className={`w-full p-3 rounded-md font-medium transition-colors ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {focusAreaName}
                  </Button>
                );
              })}
              slidesPerView={2}
              spaceBetween={20}
              pagination={false}
              breakpoints={navBreakpoints}
              loop={false}
              centerInsufficientSlides
              className="col-span-full"
            />

            {classList?.length ? (
              <>
                {classList.map((classicClass) => (
                  <ClassicClassCard
                    key={classicClass?.videoId}
                    classicClass={classicClass}
                  />
                ))}

                {/* زرار تحميل المزيد */}
                {hasNextPage && (
                  <div className="col-span-full flex justify-center">
                    <Button
                      className="bg-primary w-28 p-2 text-white font-medium rounded-md"
                      onClick={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                    >
                      {isFetchingNextPage ? <Loader /> : "Show More"}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <EmptyStatePage message="No classes found" />
            )}
          </>
        )
      )}
    </div>
  );
}

export default ClassList;
