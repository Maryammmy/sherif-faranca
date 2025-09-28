import Image from "@/src/components/ui/Image";

function Hero() {
  return (
    <div className="relative h-[220px] md:h-[320px] w-full overflow-hidden rounded-3xl">
      <Image src="/privacy-policy.jpg" alt="Privacy and Policy" fill priority />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white">
          Privacy and Policy
        </h1>
      </div>
    </div>
  );
}
export default Hero;
