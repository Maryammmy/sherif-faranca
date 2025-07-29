import Modal from "@/components/ui/Modal";
import ConfirmEmailButtons from "./ConfirmEmailButtons";
import Content from "./Content";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function ConfirmEmail({ open, onClose }: IProps) {
  return (
    <Modal open={open} onClose={onClose} contentClassName="sm:max-w-[400px]">
      <Content />
      <ConfirmEmailButtons onClose={onClose} />
    </Modal>
  );
}

export default ConfirmEmail;
