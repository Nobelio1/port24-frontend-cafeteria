"use client"

import { ProductCardProps } from "@/components/product/ProductCard";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function ProductCard({
  id,
  img,
  title,
  description,
  price,
}: ProductCardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const openModal = () => {
    router.replace(`${pathname}/${id}/${title}`, {scroll: false}  );
  };

  return (
    <div className="h-[160px] w-full flex bg-white rounded-md overflow-hidden drop-shadow-5xl relative">
      <div className="min-w-[160px]">
        <Image
          src={img}
          alt={title}
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-between w-[60%] sm:w-56 h-40 p-3.5">
        <div className="text-ellipsis overflow-hidden break-words">
        <button
          onClick={openModal}
          className="block font-semibold text-base cursor-pointer"
        >
          {title}
        </button>
          <span className="mt-0.5 text-xs whitespace-pre-wrap text-ellipsis line-clamp-3">
            {description}
          </span>
        </div>
        <div className="text-sm">
          <div>S/ {price}</div>
        </div>
      </div>
      <div className="absolute p-2 right-2.5 bottom-2.5 bg-black rounded-full">
        <FaPlus color="white" size={14} />
      </div>
    </div>
  );
}
