import Image from "next/image";
import SignupNumberForm from "./SignupNumberForm";

function SignUpNumber() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 w-full max-w-lg">
        <div className="space-y-3">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11">
              SIGN UP <span className="text-primary">WITH NUMBER</span>
            </h1>
          </header>
          <p className="text-gray-400 font-medium">
            Begin With Creating New Free Account. This Helps You Keep Your
            Health And Fitness
          </p>
        </div>
        <div>
          <SignupNumberForm />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/signup.png"
          alt="sign up illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default SignUpNumber;
