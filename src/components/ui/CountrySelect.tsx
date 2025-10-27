"use client";

import { useCountry } from "@/src/hooks";
import { useState, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { ICountry } from "@/src/interfaces/main/settings";
import { SingleSkeletonCard } from "../skeleton/Card";
import { Button } from "./Button";
import { cn } from "@/src/lib/utils";
import { Input } from "./Input";
import Image from "./Image";

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function CountrySelect({ value, onChange, className }: IProps) {
  const t = useTranslations("country");
  const { data } = useCountry();
  const countries: ICountry[] = data?.data;
  const memoizedCountries = useMemo(() => countries, [countries]);

  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [open, setOpen] = useState(false);
  // تحديد الدولة الافتراضية مرة واحدة عند التحميل فقط
  useEffect(() => {
    if (memoizedCountries?.length > 0) {
      if (value) {
        const country = memoizedCountries.find(
          (c) => c?.id?.toString() === value
        );
        setSelectedCountry(country || null);
      } else {
        const egypt = memoizedCountries.find((c) => c?.name === t("egypt"));
        setSelectedCountry(egypt || null);
      }
    }
  }, [memoizedCountries, value, t]);

  const handleSelect = (country: ICountry) => {
    setSelectedCountry(country);
    onChange?.(country?.id?.toString());
    setOpen(false);
  };

  const filteredCountries = countries?.filter((country) =>
    country?.name?.toLowerCase()?.includes(search.toLowerCase())
  );
  if (!data) return <SingleSkeletonCard className="h-10" />;

  return (
    <div className="relative w-full">
      <Button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn("flex items-center justify-between w-full", className)}
      >
        {selectedCountry ? (
          <div className="flex items-center gap-2">
            <Image
              key={selectedCountry?.id}
              src={selectedCountry?.flagUrl}
              alt={selectedCountry?.name}
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span className="text-gray-400">{selectedCountry?.name}</span>
          </div>
        ) : (
          <span className="text-gray-400">Choose the country</span>
        )}
        <span className="text-gray-400">▾</span>
      </Button>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-md max-h-[300px] overflow-y-auto">
          <Input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm border"
          />
          <ul className="divide-y">
            {filteredCountries?.length > 0 ? (
              filteredCountries?.map((country) => (
                <li
                  key={country?.id}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(country)}
                >
                  <Image
                    src={country?.flagUrl}
                    alt={country?.name}
                    width={24}
                    height={16}
                    className="rounded-sm"
                  />
                  <span className="text-gray-700">{country?.name}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-center py-2">
                No matching results
              </p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
