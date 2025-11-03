import Modal from "@/src/components/ui/Modal";
import { useState } from "react";
import FaqItem from "./FaqItem";
import { useFaq } from "@/src/hooks";
import { Button } from "@/src/components/ui/Button";
import Loader from "@/src/components/loader/Loader";
import { IFaq } from "@/src/interfaces/main/settings";
import { cn } from "@/src/lib/utils";
import { useTranslations } from "next-intl";
import { SkeletonCard } from "@/src/components/skeleton/Card";

interface IProps {
  open: boolean;
  onClose: () => void;
}

function Faq({ open, onClose }: IProps) {
  const t = useTranslations("faq");
  const [activeId, setActiveId] = useState<number | null>(1);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFaq();

  const faqList: IFaq[] | undefined = data?.pages.flatMap(
    (page) => page?.data?.items
  );

  return (
    <Modal open={open} onClose={onClose} contentClassName="bg-[#F3F5F6]">
      <div className="bg-[#F3F5F6] max-h-[355.2px] overflow-y-auto">
        {!data ? (
          <div className="flex flex-col gap-5">
            <SkeletonCard count={3} className="h-20" />
          </div>
        ) : (
          faqList?.map((faq) => (
            <FaqItem
              key={faq?.id}
              faq={faq}
              isActive={activeId === faq?.id}
              onToggle={() =>
                setActiveId(activeId === faq?.id ? null : faq?.id)
              }
            />
          ))
        )}

        {hasNextPage && (
          <div className="flex justify-center p-4">
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className={cn(
                "text-sm px-3 py-2 rounded-md bg-black hover:bg-black/60 text-white font-medium"
              )}
            >
              {isFetchingNextPage ? <Loader /> : t("showMore")}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default Faq;
