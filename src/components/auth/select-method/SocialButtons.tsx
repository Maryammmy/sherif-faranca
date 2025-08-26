"use client";

import { Button } from "@/src/components/ui/Button";
import { socialButtons } from "@/src/data/auth";
import {
  getFacebookAuthUrlAPI,
  getGoogleAuthUrlAPI,
} from "@/src/services/queries/social-auth";
import Image from "next/image";

function SocialButtons() {
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

  return (
    <div className="flex flex-col gap-4 mb-8">
      {socialButtons.map((btn, i) => (
        <Button
          key={i}
          className="w-full border border-gray-200 py-3 rounded-lg font-medium flex items-center gap-2 justify-center hover:bg-gray-50 transition"
          onClick={() => handleSocialLogin(btn.alt)} // Trigger API call
        >
          <Image src={btn.icon} alt={btn.alt} width={22} height={22} />
          {btn.label}
        </Button>
      ))}
    </div>
  );
}

export default SocialButtons;
