"use client"; // لازم يكون client component عشان يقدر يعرض الخطأ ويتفاعل مع المستخدم

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 text-center text-red-600">
      <p>Oops! Something went wrong.</p>
      <Button onClick={() => reset()} className="underline mt-2">
        Try again
      </Button>
    </div>
  );
}
