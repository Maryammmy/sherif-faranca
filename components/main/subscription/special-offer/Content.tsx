import Image from "next/image";
import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/Button";

function Content() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center">
        <Image
          src="/special-offer.jpg"
          alt="special offer"
          height={300}
          width={300}
        />
      </div>
      <div className="space-y-8">
        <PricingCard />
        <div>
          <Button className="w-full p-2 font-medium bg-primary text-white rounded-md">
            Keep The Offer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
