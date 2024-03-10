"use client";
import { initialData } from "@/seed/seed";
import notFound from "../not-found";
import { ProductGrid, Title } from "@/components";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}
const products = initialData.products;
export default function ({ params }: Props) {
  const [category, setCategory] = useState([]);
  const { id } = params;
  if (id != "kid" && id != "men" && id != "women") {
    return notFound();
  }
  useEffect(() => {
    setCategory(products.filter((product) => product.gender == id));
  }, [id]);
  const label = {
    men: "Para Hombres",
    women: "Para Mujeres",
    kid: "Para niños",
  };
  return (
    <div>
      <Title title={`Articulos para ${label[id]}`} />
      <ProductGrid products={category} />
    </div>
  );
}
