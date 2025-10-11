import Image from "next/image";

export default function Header() {
  return (
    <div className="py-7 px-8 sticky top-0 z-50 bg-black">
      <div className="flex items-center gap-2.5">
        <Image
          src={"/landing/adviciya_logo.svg"}
          alt="adviciya logo"
          width={51}
          height={36}
        />
        <Image
          src={"/landing/reviuai_logo.svg"}
          alt="reviu ai logo"
          width={52}
          height={34}
        />
      </div>
      <div>{/** Hamburger menu */}</div>
    </div>
  );
}
