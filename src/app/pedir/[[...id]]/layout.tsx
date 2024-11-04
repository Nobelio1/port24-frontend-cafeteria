"use client"

import ShoppingCart from "@/components/store/cart/ShoppingCart";
import ShoppingCartMobile from "@/components/store/cart/ShoppingCartMobile";
import FilterProducts from "@/components/store/Filters/FilterProducts";
import Products from "@/components/store/Products/Products";
import { useState } from "react";

export default function StoreLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const [product, ] = useState(false)

  

  return (
    <div className="container md:max-w-[1200px] mx-auto">
      <div className="md:hidden">
        <ShoppingCartMobile/>
      </div>
      <div className="w-full md:flex">
        <div className="md:w-2/3">
          <FilterProducts/>
          <Products/> 
        </div>
        <div className="hidden md:block w-1/3">
          <ShoppingCart/>
        </div>
      </div>
      {
        product && (
          <>{children}</>
        )
      }
    </div>
  );
}