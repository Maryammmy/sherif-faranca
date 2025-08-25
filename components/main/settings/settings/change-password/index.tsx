import Modal from "@/components/ui/Modal";
import ChangePasswordForm from "./ChangePasswordForm";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ChangePassword({ open, onClose }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Change password"
      titleClassName="text-gray-700 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
    >
      <ChangePasswordForm close={onClose} />
    </Modal>
  );
}

export default ChangePassword;
