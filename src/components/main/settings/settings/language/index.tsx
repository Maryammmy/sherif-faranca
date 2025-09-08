import Modal from "@/src/components/ui/Modal";
import Content from "./Content";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function Language({ open, onClose }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Language"
      titleClassName="text-gray-600 text-center font-bold"
      contentClassName="sm:max-w-[400px]"
      closeButtonClassname="text-gray-800 border-gray-800"
    >
      <Content />
    </Modal>
  );
}

export default Language;
