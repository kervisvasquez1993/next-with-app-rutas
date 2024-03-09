import Image from "next/image";
import { titleFont } from "../../config/fonts";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
const products = initialData.products
export default function Home() {
  return (
    <>
     <Title title="Tienda" subTitle="Medicina" />
     <ProductGrid products={products}/>
    </>
  );
}
