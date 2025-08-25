"use client";
import Modal from "@/components/ui/Modal";
import ChangeEmailForm from "./ChangeEmailForm";
import Content from "./Content";
import { useState } from "react";
import VerifyChangeEmail from "./verify-email";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ChangeEmail({ open, onClose }: IProps) {
  const [verifyEmailOpen, setVerifyEmailOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const handleChangeEmail = (email: string) => {
    setNewEmail(email);
    setTimeout(() => {
      onClose();
      setVerifyEmailOpen(true);
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
        <ChangeEmailForm handleChangeEmail={handleChangeEmail} />
      </Modal>
      <VerifyChangeEmail
        open={verifyEmailOpen}
        onClose={() => setVerifyEmailOpen(false)}
        newEmail={newEmail}
      />
    </>
  );
}

export default ChangeEmail;
