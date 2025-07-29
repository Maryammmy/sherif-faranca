"use client";
import Modal from "@/components/ui/Modal";
import ChangeEmailForm from "./ChangeEmailForm";
import Content from "./Content";
import { useState } from "react";
import ConfirmEmail from "./confirm-email";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ChangeEmail({ open, onClose }: IProps) {
  const [confirmEmailOpen, setConfirmEmailOpen] = useState(false);
  const handleConfirmEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      onClose();
      setConfirmEmailOpen(true);
    }, 500);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        title="Change email"
        titleClassName="text-gray-600 text-center font-bold"
        contentClassName="sm:max-w-[400px]"
        closeButtonClassname="text-gray-800 border-gray-800"
      >
        <Content />
        <ChangeEmailForm handleConfirmEmail={handleConfirmEmail} />
      </Modal>
      <ConfirmEmail
        open={confirmEmailOpen}
        onClose={() => setConfirmEmailOpen(false)}
      />
    </>
  );
}

export default ChangeEmail;
