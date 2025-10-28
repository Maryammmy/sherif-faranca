"use client";

import { useState } from "react";
import Image from "@/src/components/ui/Image";
import { usePathname } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/src/components/ui/Button";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { languages } from "@/src/data";

export default function Content() {
  const locale = useLocale();
  const pathname = usePathname();

  const [lang, setLang] = useState(locale);

  const handleSave = () => {
    if (lang !== locale) {
      // router.replace(pathname, { locale: lang });
      window.location.replace(`/${lang}${pathname}`);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <RadioGroup value={lang} onValueChange={setLang} className="space-y-3">
        {languages.map((l) => (
          <div
            key={l.code}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src={l.flag}
                alt={`${l.label} language`}
                width={30}
                height={30}
              />
              <span className="font-medium">{l.label}</span>
            </div>
            <RadioGroupItem className="w-6 h-6" value={l.code} />
          </div>
        ))}
      </RadioGroup>
      <Button
        className="bg-primary py-3 font-medium text-white rounded-md"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
}
