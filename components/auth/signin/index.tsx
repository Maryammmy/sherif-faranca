import SignInForm from "./SignInForm";
import SocialButtons from "./SocialButtons";
import Image from "next/image";

function SignIn() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 w-full max-w-lg">
        <header>
          <h1 className="text-primary text-3xl sm:text-4xl font-bold leading-11">
            Welcome Back!
          </h1>
        </header>
        <h5 className="text-gray-800 text-xl sm:text-2xl font-semibold">
          You’ve been missed!
        </h5>
        <div>
          <SignInForm />
        </div>
        <div>
          <SocialButtons />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image src="/login.png" alt="logo" width={500} height={500} />
      </div>
    </div>
  );
}

export default SignIn;
