import { SlLocationPin, SlClock } from "react-icons/sl";

export default function ShoppingCartMobile() {
  return (
    <>
      <div className="bg-black text-white px-6 flex my-4 justify-center h-[56px]">
        <div className="flex justify-center items-center gap-2">
          <SlLocationPin />
          <span className="font-semibold text-sm">
            Retirar en Local San Miguel
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <SlClock />
          <span className="font-semibold text-sm">Día Domingo 9, Jueves</span>
        </div>
      </div>
      <div>
        {/* Modal */}
      </div>
    </>
  );
}
