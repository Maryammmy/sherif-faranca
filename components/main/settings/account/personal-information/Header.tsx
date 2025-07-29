import { CloseButtonModal } from "@/components/ui/Modal";

function Header() {
  return (
    <div className="padding-layout">
      <CloseButtonModal closeButtonClassname="text-white border-white" />
      <h3 className="sm:text-lg font-bold text-white text-center">
        Personal Information
      </h3>
    </div>
  );
}

export default Header;
