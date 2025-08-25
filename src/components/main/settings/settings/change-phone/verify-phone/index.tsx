import Modal from "@/src/components/ui/Modal";
import Content from "./Content";
import VerifyPhoneForm from "./VerifyPhoneForm";
import { ChangePhone } from "@/src/schemas/main/settings/change-phone";

interface IProps {
  open: boolean;
  onClose: () => void;
  newPhone: ChangePhone;
}
function VerifyPhone({ open, onClose, newPhone }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="verification code"
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
    >
      <Content newPhone={newPhone} />
      <VerifyPhoneForm onClose={onClose} newPhone={newPhone} />
    </Modal>
  );
}

export default VerifyPhone;
