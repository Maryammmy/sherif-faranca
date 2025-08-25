"use client";
import Modal from "@/components/ui/Modal";
import Content from "./Content";
import { useState } from "react";
import ChangePhoneForm from "./ChangePhoneForm";
import VerifyPhone from "./verify-phone";
import { type ChangePhone } from "@/schema/main/settings/change-phone";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ChangePhone({ open, onClose }: IProps) {
  const [verifyPhoneOpen, setVerifyPhoneOpen] = useState(false);
  const [newPhone, setNewPhone] = useState({
    countryCode: "",
    phoneNumber: "",
  });

  const handleChangePhone = (phone: ChangePhone) => {
    setNewPhone(phone);
    setTimeout(() => {
      onClose();
      setVerifyPhoneOpen(true);
    }, 500);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        title="Change phone number"
        titleClassName="text-gray-600 text-center font-bold"
        contentClassName="sm:max-w-[400px]"
        closeButtonClassname="text-gray-800 border-gray-800"
      >
        <Content />
        <ChangePhoneForm handleChangePhone={handleChangePhone} />
      </Modal>
      <VerifyPhone
        open={verifyPhoneOpen}
        onClose={() => setVerifyPhoneOpen(false)}
        newPhone={newPhone}
      />
    </>
  );
}

export default ChangePhone;
