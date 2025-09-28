import Image from "@/src/components/ui/Image";
import ChangePasswordForm from "./ChangePasswordForm";

function ChangePassword() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 w-full max-w-lg">
        <header>
          <h1 className="text-primary text-3xl sm:text-4xl font-bold leading-11">
            Change Password
          </h1>
        </header>
        <div>
          <ChangePasswordForm />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image src="/login.png" alt="logo" width={500} height={500} />
      </div>
    </div>
  );
}

export default ChangePassword;
