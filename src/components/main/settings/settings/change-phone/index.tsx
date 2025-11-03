"use client";
import Modal from "@/src/components/ui/Modal";
import Content from "./Content";
import { useState } from "react";
import ChangePhoneForm from "./ChangePhoneForm";
import VerifyPhone from "./verify-phone";
import { type ChangePhone } from "@/src/schemas/main/settings/change-phone";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ChangePhone({ open, onClose }: IProps) {
  const t = useTranslations("changePhoneNumber");
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
        title={t("title")}
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
