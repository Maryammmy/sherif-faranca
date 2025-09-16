import { useState } from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import Modal from "@/src/components/ui/Modal";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";

interface IProps {
  open: boolean;
  onClose: () => void;
}

function ShareModal({ open, onClose }: IProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = "Check this out! 🚀";

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Share"
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-md"
    >
      <div className="flex flex-col items-center gap-4">
        {/* أزرار السوشيال ميديا */}
        <div className="flex gap-5">
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>

        {/* عرض الرابط مع زر نسخ */}
        <div className="flex items-center w-full border rounded-lg overflow-hidden">
          <Input
            type="text"
            value={shareUrl}
            readOnly
            className="w-full p-2 h-full text-gray-700 bg-gray-100 outline-none text-sm font-medium"
          />
          <Button
            onClick={handleCopy}
            className="bg-gray-200 p-2 shrink-0 hover:bg-gray-300 font-medium transition"
          >
            {copied ? "✅ Copied!" : "📋 Copy"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ShareModal;
