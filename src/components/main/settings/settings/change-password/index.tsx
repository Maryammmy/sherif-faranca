import Modal from "@/src/components/ui/Modal";
import ChangePasswordForm from "./ChangePasswordForm";
import { useTranslations } from "next-intl";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ChangePassword({ open, onClose }: IProps) {
  const t = useTranslations("changePassword");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t("title")}
      titleClassName="text-gray-700 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
    >
      <ChangePasswordForm close={onClose} />
    </Modal>
  );
}

export default ChangePassword;
