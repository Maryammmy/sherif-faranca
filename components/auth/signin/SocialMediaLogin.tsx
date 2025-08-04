import { SocialMediaImages } from "@/data/auth/sign-in";
import Image from "next/image";
import Link from "next/link";

function SocialMediaSignIn() {
  return (
    <div>
      <div>
        <p className="text-[#7C8493] font-medium text-center">
          Select another method login
        </p>
      </div>
      <div className="flex gap-5 justify-center py-5">
        {SocialMediaImages.map((img, index) => (
          <div
            key={index}
            className="border-2 rounded-md px-2 py-1 gap-2 text-[#8F8F8F26] flex justify-center items-center"
          >
            <Image src={img} alt="social Media image" width={25} height={25} />
          </div>
        ))}
      </div>
      <div className="flex gap-1 justify-center items-center font-medium">
        <p className="text-[#253248]">Don&apos;t have account ?</p>
        <Link href="/select-language" className="text-primary">
          <span className="hidden lg:block">Create new account</span>
          <span className="block lg:hidden">Sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default SocialMediaSignIn;
