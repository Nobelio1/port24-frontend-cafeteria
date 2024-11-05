import Image from "next/image";
import { Pr3 } from "../../../../public";
import { FiPlus } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";

export default function ShoppingCartCard() {
  return (
    <div>
      <div className="flex flex-col py-5">
        <div className="flex items-start">
          <div className="w-[56px] h-[56px] overflow-clip rounded">
            <Image src={Pr3} alt="-" width={56} height={56} />
          </div>
          <div className="flex-1 flex flex-col px-3">
            <div>
              <span className="text-sm text-gray-800 font-semibold">
                Avellana capuccino
              </span>
            </div>
            <div className="font-light text-sm text-gray-400">
              <span>Leche</span>
              <ul className="list-disc list-inside">
                <li>Leche entera</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="text-sm">S/ 13.00</span>
          </div>
        </div>
        <div className="flex pl-16 ml-1 mt-2">
          <div className="flex flex-1 justify-start items-center">
            <button className="text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 transition ease-in-out duration-150 hover:bg-gray-200">
              <IoMdTrash />
            </button>
            <div className="text-sm font-semibold px-2">1</div>
            <button className="text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-100 transition ease-in-out duration-150 hover:bg-gray-200">
              <FiPlus />
            </button>
          </div>
          <div>
            <button className="inline-flex font-semibold border-2 items-center transition ease-in-out duration-150 !text-xs h-8 bg-gray-100 text-gray-700 border-gray-100 cursor-pointer hover:bg-gray-200 hover:border-gray-200 rounded-full px-4 py-0 ">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
