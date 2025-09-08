import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import { languages } from "@/src/data";
import Image from "next/image";

export default function Content() {
  const [lang, setLang] = useState("en");

  return (
    <div className="flex flex-col gap-5">
      <RadioGroup value={lang} onValueChange={setLang} className="space-y-3">
        {languages.map((l) => (
          <div
            key={l.code}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center gap-2">
              <div>
                <Image
                  src={l.flag}
                  alt={`${l.label} language`}
                  width={30}
                  height={30}
                />
              </div>
              <span className="font-medium">{l.label}</span>
            </div>
            <RadioGroupItem className="w-6 h-6" value={l.code} />
          </div>
        ))}
      </RadioGroup>
      <Button className="bg-primary py-3 font-medium text-white rounded-md">
        Save
      </Button>
    </div>
  );
}
