import ForgetPasswordForm from "./ForgetPasswordForm";
import Image from "@/src/components/ui/Image";

function ForgetPassword() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 w-full max-w-lg">
        <div className="space-y-3">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11">
              FORGET <span className="text-primary">PASSWORD</span>
            </h1>
          </header>
          <p className="text-gray-400 font-medium">
            Don&apos;t worry, your account will be restored. Just enter your
            email to receive the code
          </p>
        </div>
        <div>
          <ForgetPasswordForm />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/forget-password.png"
          alt="Forget password"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default ForgetPassword;
