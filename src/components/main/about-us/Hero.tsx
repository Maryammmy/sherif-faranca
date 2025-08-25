import Image from "next/image";

interface IProps {
  imageUrl: string;
}
export default function Hero({ imageUrl }: IProps) {
  return (
    <div className="relative h-[260px] md:h-[400px] w-full overflow-hidden rounded-3xl">
      <Image src={imageUrl} alt="Sherif Franca Platform" fill priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <header>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug">
            Discover the Unique Qualities About
            <br />
            Sherif Franca Platform
          </h1>
        </header>
        <p className="mt-3 max-w-2xl text-gray-200 text-sm md:text-base">
          we believe that fitness is more than just a routine; it’s a way of
          life. Founded with the mission to inspire and empower individuals on
          their fitness journeys
        </p>
      </div>
    </div>
  );
}
