"use client";
import Modal from "@/src/components/ui/Modal";
import Content from "./Content";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ContactUs({ open, onClose }: IProps) {
  const t = useTranslations("contactUs");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
      closeButtonClassname="text-gray-800 border-gray-800"
    >
      <Content />
    </Modal>
  );
}

export default ContactUs;
