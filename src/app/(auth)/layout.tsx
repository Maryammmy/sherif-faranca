import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-5 pb-0 sm:p-8 sm:pb-0">
      <div>
        <Image src="/logo.png" alt="logo" width={150} height={150} priority />
      </div>
      <div className="min-h-[calc(100vh-170px)]">{children}</div>
      <div className="py-5">
        <p className="text-center text-[#475467] font-medium">
          powered by Catalyst
        </p>
      </div>
    </div>
  );
}
