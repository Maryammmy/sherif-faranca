"use client";

import { SkeletonCard } from "@/src/components/skeleton/Card";
import { useContactUs } from "@/src/hooks";
import { Link } from "@/src/i18n/navigation";
import { IContactItem, IContactUs } from "@/src/interfaces/main/services";
import { Mail, Phone, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Content() {
  const t = useTranslations("contactUs");
  const { data } = useContactUs();

  if (!data)
    return (
      <div className="flex flex-col gap-4">
        <SkeletonCard count={3} className="h-12" />
      </div>
    );

  const {
    hotline,
    mail,
    phoneNumber,
    facbookUrl,
    instegramUrl,
    tiktokUrl,
    countrycode,
  }: IContactUs = data?.data;

  const contactItems: IContactItem[] = [
    {
      label: "mail",
      value: mail,
      icon: <Mail className="w-5 h-5 text-primary" />,
      href: `mailto:${mail}`,
    },
    {
      label: "hotline",
      value: hotline,
      icon: <Phone className="w-5 h-5 text-primary" />,
      href: `tel:${hotline.replace(/\s/g, "")}`,
    },
    {
      label: "phoneNumber",
      value: `+${countrycode} ${phoneNumber}`,
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      href: `https://wa.me/${countrycode}${phoneNumber.replace(/\s/g, "")}`,
    },
    {
      label: "Facebook",
      value: facbookUrl,
      icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      href: facbookUrl,
      isSocial: true,
    },
    {
      label: "Instagram",
      value: instegramUrl,
      icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      href: instegramUrl,
      isSocial: true,
    },
    {
      label: "TikTok",
      value: tiktokUrl,
      icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      href: tiktokUrl,
      isSocial: true,
    },
  ];

  // تقسيم العناصر
  const socialLinks = contactItems?.filter(({ isSocial }) => isSocial);
  const otherContacts = contactItems?.filter(({ isSocial }) => !isSocial);

  return (
    <div className="flex flex-col gap-4">
      {/* الروابط الاجتماعية */}
      <div className="flex gap-4 justify-center">
        {socialLinks?.map(({ label, icon, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-xl hover:text-primary transition-all"
          >
            {icon}
          </Link>
        ))}
      </div>

      {/* باقي البيانات */}
      <div className="flex flex-col gap-2">
        {otherContacts?.map(({ label, value, icon, href }) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={label}
            href={href}
            className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="shrink-0">{icon}</span>
              <span className="font-medium text-secondary">{t(label)}</span>
            </div>
            <span
              className="text-sm text-gray-700 font-medium break-all"
              dir={
                label === "phoneNumber" || label === "hotline" ? "ltr" : "auto"
              }
            >
              {value}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Content;
