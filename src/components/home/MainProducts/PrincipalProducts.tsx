import ProductCard, {
  ProductCardProps,
} from "@/components/product/ProductCard";
import {
  Banner2,
  Cafe1,
  Cafe2,
  Cafe3,
  Cafe4,
  Cafe5,
  Producto1,
  Producto2,
  Producto3,
  Producto4,
} from "../../../../public";
import Image from "next/image";

const coffees: ProductCardProps[] = [
  {
    id: "1",
    img: Cafe1,
    title: "Café Gourmet Tostado Clásico en Grano",
    description: "Café ligeramente suave, con un ",
  },
  {
    id: "2",
    img: Cafe2,
    title: "Café Gourmet Tostado Clásico Molido",
    description: "Café ligeramente suave, con un",
  },
  {
    id: "3",
    img: Cafe3,
    title: "Café Gourmet Extra Fuerte Molido",
    description: "Café ligeramente suave, con un",

  },
  {
    id: "4",
    img: Cafe4,
    title: "Café Gourmet Espresso Molido",
    description: "Café ligeramente suave, con un",
  },
  {
    id: "5",
    img: Cafe5,
    title: "Café Descafeinado Molido",
    description: "Café ligeramente suave, con un",
  },
];

const frappes: ProductCardProps[] = [
  {
    id: "6",
    img: Producto1,
    title: "Frappé mocha",
    description:
      "Frappé de café con sabor a chocolate, coronado con crema batida y fudge, 12 oz.",
    price: 13.5,
  },
  {
    id: "7",
    img: Producto2,
    title: "Frappé caramel",
    description:
      "Frappé de café con sabor a caramelo, coronado con crema batida y caramelo, 12 oz.",
    price: 13.5,
  },
  {
    id: "8",
    img: Producto3,
    title: "Frappé de café",
    description: "Frappé de café, coronado con crema batida, 12 oz.",
    price: 12.5,
  },
  {
    id: "9",
    img: Producto4,
    title: "Frappé de cookies",
    description:
      "Frappé con galleta oreo, coronado con crema batida y fudge, (sin café), 12 oz.",
    price: 13.5,
  },
];

export default function PrincipalProducts() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex gap-2 flex-col md:flex-row place-self-center">
        {coffees.map((coffee) => (
          <ProductCard key={coffee.id} {...coffee} />
        ))}
      </div>
      <div className="my-4">
        <Image src={Banner2} alt="Banner" className="w-full" />
      </div>
      <div className="flex gap-2 flex-col md:flex-row place-self-center">
        {frappes.map((coffee) => (
          <ProductCard key={coffee.id} {...coffee} />
        ))}
      </div>
    </div>
  );
}
