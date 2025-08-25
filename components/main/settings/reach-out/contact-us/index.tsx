"use client";
import Modal from "@/components/ui/Modal";
import Content from "./Content";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ContactUs({ open, onClose }: IProps) {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        title="Contact Us"
        titleClassName="text-gray-600 text-center font-bold"
        contentClassName="sm:max-w-[400px]"
        closeButtonClassname="text-gray-800 border-gray-800"
      >
        <Content />
      </Modal>
    </>
  );
}

export default ContactUs;
