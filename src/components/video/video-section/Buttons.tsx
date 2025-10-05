import { useState } from "react";
import ShareModal from "./ShareModal";
import { Button } from "@/src/components/ui/Button";
import { Forward } from "lucide-react";

interface IProps {
  handleReset: () => void;
}
function Buttons({ handleReset }: IProps) {
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end gap-5">
        <Button
          onClick={handleReset}
          className="w-28 bg-red-600 text-sm text-white font-medium p-2 rounded-md hover:bg-red-600 transition"
        >
          Reset
        </Button>
        <Button
          onClick={() => setShareOpen(true)}
          className="w-28 bg-primary flex justify-center items-center gap-2 text-sm text-white font-medium p-2 rounded-md hover:bg-primary/80 transition"
        >
          <Forward />
          Share
        </Button>
      </div>
      <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  );
}

export default Buttons;
