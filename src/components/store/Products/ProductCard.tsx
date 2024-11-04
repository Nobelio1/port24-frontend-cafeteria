import { ProductCardProps } from "@/components/product/ProductCard";
import Image from "next/image";

export default function ProductCard({
  id,
  img,
  title,
  description,
  price,
}: ProductCardProps) {
  console.log(id,description,price);
  return (
    <div className="h-[160px] w-full flex bg-white rounded-md overflow-hidden drop-shadow-5xl">
      <div>
        <Image src={img} alt={title} width={160} height={160} />
      </div>
      <div></div>
    </div>
  );
}
