"use client";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

interface IProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IProps) {
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
