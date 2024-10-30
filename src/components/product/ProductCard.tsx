import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export interface ProductCardProps {
  id: string;
  img: StaticImageData;
  title: string;
  description: string;
  price?: number;
}

export default function ProductCard({
  id,
  img,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="flex flex-col max-w-[375px] md:max-w-[186px] md:min-h-[375px] rounded-md shadow-xl md:shadow-md mb-4 overflow-hidden">
      <Image src={img} alt="Product" className="w-full"/>
      <div className="flex-1 p-2.5 px-5 flex flex-col">
        <span className="text-base font-semibold">{title}</span>
        <p className="mt-2 text-sm text-gray-400 font-light ">{description.split('',50)}</p>
        {price && (
          <p className="text-lg font-semibold text-primary mt-4">S/ {price}</p>
        )}
      </div>
      <div className="w-full flex items-center gap-2 text-white bg-card cursor-pointer py-3 px-4">
        <Link
          href={`/pedir/${id}/${title}`}
          className="text-white font-semibold flex items-centerS"
        >
          Ver Producto{" "}
        </Link>
        <SlArrowRight size={13} />
      </div>
    </div>
  );
}
