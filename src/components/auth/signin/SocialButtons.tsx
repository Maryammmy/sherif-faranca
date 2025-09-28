"use client";

import { Button } from "@/src/components/ui/Button";
import { socialButtons } from "@/src/data/auth";
import { setToken, useQueryParams } from "@/src/lib/utils";
import {
  getFacebookAuthUrlAPI,
  getGoogleAuthUrlAPI,
} from "@/src/services/queries/social-auth";
import { Mail, Phone } from "lucide-react";
import Image from "@/src/components/ui/Image";
import { Link, useRouter } from "@/src/i18n/navigation";
import { useEffect, useState } from "react";
import SystemLoader from "../../loader/SystemLoader";

function SocialButtons() {
  const [loading, setLoading] = useState(false);
  const type = useQueryParams("type");
  const isNumber = type === "number";
  const { token, isAnswered } = useQueryParams();
  const router = useRouter();
  useEffect(() => {
    const run = async () => {
      if (!token) return;
      setLoading(true); // شغل اللودر
      await setToken(token);

      if (isAnswered === "true") {
        router.push("/");
      } else if (isAnswered === "false") {
        router.push("/questions/1/intro");
      }
      setLoading(false); // ممكن مش ضروري لو هتعمل redirect
    };

    run();
  }, [token, isAnswered, router]);

  const handleSocialLogin = async (provider: "Google" | "Facebook") => {
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
    const url = response?.url;
    if (url) {
      window.location.href = url; // Redirect user to OAuth consent screen
    } else {
      console.error("Auth URL not found in response:", response);
    }
  };
  if (loading) return <SystemLoader />;
  return (
    <div>
      <div>
        <p className="text-[#7C8493] font-medium text-center">
          Select another method login
        </p>
      </div>
      <div className="flex gap-5 justify-center py-5">
        <div className="flex gap-5 justify-center">
          {socialButtons.map(({ icon, alt }, index) => (
            <Button
              onClick={() => handleSocialLogin(alt)} // Trigger API call
              key={index}
              className="border-2 rounded-md px-2 py-1 gap-2 flex justify-center items-center"
            >
              <div>
                <Image src={icon} alt={alt} width={32} height={32} />
              </div>
            </Button>
          ))}
        </div>
        <Link
          href={isNumber ? "/signin?type=email" : "/signin?type=number"}
          className="border-2 rounded-md px-2 py-1 gap-2 flex justify-center items-center"
        >
          {isNumber ? (
            <Mail className="size-8 text-gray-400" />
          ) : (
            <Phone className="size-8 text-gray-400" />
          )}
        </Link>
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
