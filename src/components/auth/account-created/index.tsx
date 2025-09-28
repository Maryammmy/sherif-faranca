"use client";
import Image from "@/src/components/ui/Image";
import { Link } from "@/src/i18n/navigation";

function AccountCreated() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-5 w-full max-w-lg">
        <div className="space-y-3">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-11 sm:leading-16">
              YOUR{" "}
              <span className="text-primary">ACCOUNT CREATED SUCCESSFULLY</span>
            </h1>
          </header>
        </div>
        <div className="py-5">
          <Link
            href="/questions/1"
            className="flex justify-center items-center bg-primary text-white p-3 rounded-md font-medium"
          >
            Let&apos;s customize your plan
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/created-account.png"
          alt="Created account"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default AccountCreated;
