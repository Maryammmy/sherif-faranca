import { useState } from "react";
import ShareModal from "./ShareModal";
import { Button } from "@/src/components/ui/Button";
import { Forward } from "lucide-react";
import { useTranslations } from "next-intl";

interface IProps {
  handleReset: () => void;
}
function Buttons({ handleReset }: IProps) {
  const t = useTranslations("video");
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end gap-5">
        <Button
          onClick={handleReset}
          className="bg-red-600 text-sm text-white font-medium px-3 py-2 rounded-md hover:bg-red-600 transition"
        >
          {t("reset")}
        </Button>
        <Button
          onClick={() => setShareOpen(true)}
          className="bg-primary flex justify-center items-center gap-2 text-sm text-white font-medium px-3 py-2 rounded-md hover:bg-primary/80 transition"
        >
          <Forward />
          {t("share")}
        </Button>
      </div>
      <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  );
}

export default Buttons;
