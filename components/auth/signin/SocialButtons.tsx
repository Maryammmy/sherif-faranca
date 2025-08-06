"use client";

import { Button } from "@/components/ui/Button";
import { socialButtons } from "@/data/auth";
import { handleClientError, setToken, useQueryParams } from "@/lib/utils";
import { getFacebookAuthUrlAPI, getGoogleAuthUrlAPI } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SocialButtons() {
  const { token, isAnswered } = useQueryParams();
  const router = useRouter();
  useEffect(() => {
    if (!token) return;
    setToken(token);
    if (isAnswered === "true") {
      router.push("/");
    } else if (isAnswered === "false") {
      router.push("/questions/1/intro");
    }
  }, [token, isAnswered, router]);
  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
    try {
      const authAPIs = {
        Google: getGoogleAuthUrlAPI,
        Facebook: getFacebookAuthUrlAPI,
      };
      const getAuthUrl = authAPIs[provider];
      if (!getAuthUrl) {
        console.error(`Unsupported provider: ${provider}`);
        return;
      }
      const response = await getAuthUrl();
      const url = response?.data?.url;

      if (url) {
        window.location.href = url; // Redirect user to OAuth consent screen
      } else {
        console.error("Auth URL not found in response:", response);
      }
    } catch (error) {
      handleClientError(error);
    }
  };
  return (
    <div>
      <div>
        <p className="text-[#7C8493] font-medium text-center">
          Select another method login
        </p>
      </div>
      <div className="flex gap-5 justify-center py-5">
        {socialButtons.map(({ icon, alt }, index) => (
          <Button
            onClick={() => handleSocialLogin(alt)} // Trigger API call
            key={index}
            className="border-2 rounded-md px-2 py-1 gap-2 text-[#8F8F8F26] flex justify-center items-center"
          >
            <Image src={icon} alt={alt} width={25} height={25} />
          </Button>
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

export default SocialButtons;
