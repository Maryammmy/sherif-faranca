"use client";

import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";

function Introduction() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center min-h-screen padding-layout">
      <div className="space-y-5 w-full max-w-lg">
        <header className="flex items-center gap-2">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-700">
            Hello !
          </h1>
          <Image src="/hello-hand.svg" alt="logo" width={50} height={50} />
        </header>
        <div className="space-y-2">
          <h5 className="text-lg text-gray-700">This data will help us</h5>
          <h4 className="text-gray-700 text-3xl font-bold leading-11">
            Here are some questions to
            <span className="text-primary"> personalized plan</span> for you.
          </h4>
        </div>
        <div className="pt-5">
          <Link
            href="/questions/1/gender"
            className="flex justify-center items-center bg-primary text-white p-3 rounded-md font-medium"
          >
            Next
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-center lg:items-center">
        <Image src="/fitness-intro.png" alt="auth" width={500} height={500} />
      </div>
    </div>
  );
}

export default Introduction;
