import Link from "next/link";
import Logo_L from "../../../public/img/Size=Large.svg";
import Logo_S from "../../../public/img/Size=Small.svg";

export default function Header() {
  return (
    <header className="bg-white border-2 border-b-gray-200 w-full sticky top-0">
      <Link href="/">
        {/* 중간 및 큰 화면에서 Logo_L 표시 */}
        <Logo_L
          className="hidden md:block my-[10px] md:ml-[16px] lg:ml-[160px]"
          width={151}
          height={40}
        />
        {/* 작은 화면에서 Logo_S 표시 */}
        <Logo_S
          className="block md:hidden my-[10px] ml-[16px]"
          width={71}
          height={40}
        />
      </Link>
    </header>
  );
}
