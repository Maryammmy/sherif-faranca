import Modal from "@/src/components/ui/Modal";
import Content from "./Content";
import VerifyPhoneForm from "./VerifyPhoneForm";
import { ChangePhone } from "@/src/schemas/main/settings/change-phone";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
  newPhone: ChangePhone;
}
function VerifyPhone({ open, onClose, newPhone }: IProps) {
  const t = useTranslations("changePhoneNumber.verifyPhoneNumber");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
    >
      <Content newPhone={newPhone} />
      <VerifyPhoneForm onClose={onClose} newPhone={newPhone} />
    </Modal>
  );
}

export default VerifyPhone;
