// import Image from "next/image";
import "./system-loader.css";

export default function SystemLoader() {
  return (
    <div className={"loadingOverlay"} dir="ltr">
      <div className={"wavingText capitalize"}>
        {/* <div className="relative w-[1000px] h[1000px]">
          <Image src="/logo.svg" fill alt="logo" />
        </div> */}
        <span>s</span>
        <span>h</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>f</span>
        <span> {"  "}</span>
        <span>f</span>
        <span>a</span>
        <span>r</span>
        <span>a</span>
        <span>n</span>
        <span>c</span>
        <span>a</span>
      </div>
    </div>
  );
}
