import { SlLocationPin } from "react-icons/sl";
import ShoppingCartCard from "./ShoppingCartCard";

export default function ShoppingCart() {
  return (
    <div className="flex flex-col h-[74vh] drop-shadow-5xl rounded-lg bg-white ml-2 mt-6 sticky px-2 py-4 top-5">
      <div className="px-3 font-semibold text-lg">Tu Carrito</div>
      <div className="flex-initial flex-col h-20 align-center py-4 px-2 border-b dark:border-zinc-300">
        <div className="inline-flex text-sm border-2 items-center transition ease-in-out duration-150 bg-gray-100 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-200 hover:border-gray-200 rounded-full px-4 py-0 h-full w-full overflow-hidden">
          <div className="flex-1 font-semibold">
            <div className="flex items-center gap-2 px-2 truncate">
              <div>
                <SlLocationPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold">
                  Ingrese su dirección
                </span>
                <span className="flex text-xs font-normal italic">
                  Lo antes posible
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* <div className="full-w flex-row justify-center text-center p-6">
          <h5 className="flex-1 break-normal text-base font-semibold">
            ¡Arma tu carrito ahora!
          </h5>
          <p className="flex-1 break-normal font-light text-sm">
            Los productos que agregues aparecerán aquí
          </p>
        </div> */}

        <div className="flex flex-col divide-y divide-solid divide-gray-200 overflow-auto px-3 dark:divide-zinc-300">
          <ShoppingCartCard />
          <ShoppingCartCard />
        </div>
      </div>
      <div className="flex-initial flex-col align-center border-t dark:border-zinc-300">
        <div className="mx-2 font-semibold flex justify-between py-4 text-sm">
          <span>Subtotal</span>
          <span>S/ 22.50</span>
        </div>
        <div className="mx-2 justify-center text-center">
          <button className="bg-black inline-flex justify-center items-center rounded shadow-sm font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm w-full text-white h-12">Continuar</button>
        </div>
      </div>

    </div>
  );
}
