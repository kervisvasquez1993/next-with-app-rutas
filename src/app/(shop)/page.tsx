import Image from "next/image";
import { titleFont } from "../../config/fonts";

export default function Home() {
  return (
    <>
      <h3>hola</h3>
      <h1 className={`${titleFont.className} font-bold`}>hola mundo</h1>
    </>
  );
}
