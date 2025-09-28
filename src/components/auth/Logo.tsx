"use client";
import Image from "@/src/components/ui/Image";
import { Button } from "../ui/Button";

function Logo() {
  const handleLogoClick = () => {
    window.location.reload(); // يعمل refresh
  };
  return (
    <Button onClick={handleLogoClick}>
      <Image src="/logo.png" alt="logo" width={150} height={150} priority />
    </Button>
  );
}

export default Logo;
