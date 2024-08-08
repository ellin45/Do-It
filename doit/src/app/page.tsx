import Image from "next/image";
import "./globals.css";
import IconSVG from '../../public/img/img.svg'; 
import Header from "./components/Header";
import CheckBox from "./components/CheckBox";
export default function Home() {
  return (
    <main>
        <Header></Header>
      <div className="font-nanumSquareBold text-slate-900 text-[32px]">
        이건 굵은 글씨체
        <div className="font-nanumSquare text-slate-900 text-[32px]">
          한글이다아 이거 나눔체 맞냐
        </div>
        <IconSVG width={200} height={200} /> 
        <CheckBox></CheckBox>
      </div>
    </main>
  );
}
