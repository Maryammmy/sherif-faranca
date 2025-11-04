import Modal from "@/src/components/ui/Modal";
import VerifyEmailForm from "./VerifyEmailForm";
import Content from "./Content";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
  newEmail: string;
}
function VerifyEmail({ open, onClose, newEmail }: IProps) {
  const t = useTranslations("changeEmail.verifyEmail");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
    >
      <Content newEmail={newEmail} />
      <VerifyEmailForm onClose={onClose} newEmail={newEmail} />
    </Modal>
  );
}

export default VerifyEmail;
