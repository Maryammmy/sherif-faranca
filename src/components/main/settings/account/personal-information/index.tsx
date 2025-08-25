import Modal from "@/src/components/ui/Modal";
import Header from "./Header";
import PersonalInformationForm from "./personal-information-form";

interface IProps {
  open: boolean;
  onClose: () => void;
}
function PersonalInformation({ open, onClose }: IProps) {
  return (
    <Modal
      contentClassName="p-0 lg:max-w-[600px]"
      open={open}
      onClose={onClose}
    >
      <div className="h-[80vh] overflow-y-auto rounded-lg bg-white">
        <div className="relative bg-primary h-[200px] rounded-b-3xl">
          <Header />
          <div className="padding-layout overflow-y-auto absolute top-[68] sm:top-[108px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] sm:w-[calc(100%-40px)] rounded-t-3xl h-[calc(80vh-68px)] sm:h-[calc(80vh-108px)] bg-white">
            <PersonalInformationForm close={onClose} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PersonalInformation;
