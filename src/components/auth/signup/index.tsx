import SignupForm from "./SignupForm";
import Header from "./Header";
import Image from "@/src/components/ui/Image";

function Signup() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 w-full max-w-lg">
        <Header />
        <SignupForm />
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

export default Signup;
