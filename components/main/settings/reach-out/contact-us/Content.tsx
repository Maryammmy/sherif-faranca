"use client";

import { useContactUs } from "@/hooks/services";
import { IContactUs } from "@/interfaces/main/services";

function Content() {
  const { data } = useContactUs();
  if (!data) return null;
  const { hotline, mail }: IContactUs = data;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2 py-4 px-2 bg-gray-50 rounded-md">
        <h3 className="font-bold text-gray-600">Mail</h3>
        <p className="text-sm text-secondary font-medium break-all">{mail}</p>
      </div>
      <div className="flex items-center justify-between gap-2 py-4 px-2 bg-gray-50 rounded-md">
        <h3 className="font-bold text-gray-600">Hotline</h3>
        <p className="text-sm text-secondary font-medium break-all">
          {hotline}
        </p>
      </div>
    </div>
  );
}

export default Content;
