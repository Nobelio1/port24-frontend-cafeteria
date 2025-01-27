import ShoppingCart from "@/components/store/cart/ShoppingCart";
import ShoppingCartMobile from "@/components/store/cart/ShoppingCartMobile";
import FilterProducts from "@/components/store/Filters/FilterProducts";
import Products from "@/components/store/Products/Products";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="container md:max-w-[1200px] mx-auto">
      <div className="md:hidden">
        <ShoppingCartMobile />
      </div>
      <div className="w-full md:flex">
        <div className="md:w-2/3">
          <FilterProducts />
          <Products />
        </div>
        <div className="hidden md:block w-1/3">
          <ShoppingCart />
        </div>
      </div>
        {children}
    </div>
  );
}
