import Modal from "@/src/components/ui/Modal";
import ConfirmEmailButtons from "./VerifyEmailForm";
import Content from "./Content";

interface IProps {
  open: boolean;
  onClose: () => void;
  newEmail: string;
}
function VerifyEmail({ open, onClose, newEmail }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="verification code"
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
    >
      <Content newEmail={newEmail} />
      <ConfirmEmailButtons onClose={onClose} newEmail={newEmail} />
    </Modal>
  );
}

export default VerifyEmail;
