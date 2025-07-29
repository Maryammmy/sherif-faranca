import Button from "@/components/ui/Button";

interface IProps {
  onClose: () => void;
}
function ConfirmEmailButtons({ onClose }: IProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button className="bg-primary py-2.5 font-medium text-white rounded-md">
        Confirm email
      </Button>
      <Button
        onClick={onClose}
        className="hover:bg-gray-100 py-2.5 font-medium text-secondary rounded-md"
      >
        Cancel
      </Button>
    </div>
  );
}

export default ConfirmEmailButtons;
