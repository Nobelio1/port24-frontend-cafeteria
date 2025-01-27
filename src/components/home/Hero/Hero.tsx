"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./hero.css";
import { Hero1, Hero2 } from "../../../../public";
import Image from "next/image";
import { SlBag, SlCursor } from "react-icons/sl";

const imgSwiper = [
  {
    id: 1,
    img: Hero1,
  },
  {
    id: 2,
    img: Hero2,
  },
];

export default function Hero() {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]}>
        {imgSwiper.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.img}
              alt="img-promo"
              className="min-h-[318px] object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-[416px] flex flex-col justify-center items-center bg-[#000000b3] border-none">
        <h3 className="text-white text-2xl lg:text-4xl font-medium mb-6">
          !Estoy listo para pedir!
        </h3>
        <div className="w-[320px] flex flex-col justify-center items-center">
          <div className="mb-4 flex gap-2">
            <div className="border border-gray-200 rounded-md py-3 px-10">
              <button className="text-white flex flex-col gap-2 items-center">
                <SlCursor />
                <span>Delivery</span>
              </button>
            </div>
            <div className="border border-gray-200 rounded-md py-3 px-8">
              <button className="text-white flex flex-col gap-2 items-center">
                <SlBag />
                <span>Para retirar</span>
              </button>
            </div>
          </div>
          <div className="w-full border border-gray-200 rounded-md py-2 text-center">
            <button className="text-white font-medium">Pedir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
