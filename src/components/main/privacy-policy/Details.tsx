import Image from "@/src/components/ui/Image";

interface IProps {
  data: string;
}
function Details({ data }: IProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data }}
      />
      <div className="order-first lg:order-none">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/privacy-policy.jpg"
            alt="Privacy illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
