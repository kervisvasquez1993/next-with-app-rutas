import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
interface Props {
  params: {
    slug: string;
  };
}
export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) {
    return notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 ">slug product pages</div>
      <div className="col-span-1 px-5 bg-blue-10'">
        <h1 className={`${titleFont.className} antial font-bold text-xl`}>
          {product.title}{" "}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-linght">{product.description}</p>
      </div>
    </div>
  );
}
