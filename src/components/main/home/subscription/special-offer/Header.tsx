import Image from "@/src/components/ui/Image";

function Header() {
  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      <div className="relative w-15 h-15 sm:w-20 sm:h-20">
        <Image src="subscribe-plan-left.svg" alt="subscribe plan" fill />
      </div>
      <div>
        <h2 className="font-bold text-sm sm:text-xl text-center max-w-xs">
          A special offer to invest in your{" "}
          <span className="text-primary">health and well-being</span>
        </h2>
      </div>
      <div className="relative w-15 h-15 sm:w-20 sm:h-20">
        <Image src="subscribe-plan-right.svg" alt="subscribe plan" fill />
      </div>
    </div>
  );
}

export default Header;
