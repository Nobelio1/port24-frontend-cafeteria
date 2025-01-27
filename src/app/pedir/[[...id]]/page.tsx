"use client"

import Image from "next/image";
import { Pr3 } from "../../../../public";
import { useRouter, useParams } from "next/navigation";


export default function Pedir() {
  const router = useRouter();
  const {id} = useParams<{ id: string; title: string }>()

  const closeModal = () => {
    router.replace("/pedir", {scroll: false});
  }

  if (id && id.length > 0) {
    return (
      <div className="fixed z-[1000] inset-0 flex items-end  md:items-center justify-center bg-overlay " onClick={closeModal}>
        <div
          className="
              animate__animated animate__zoomIn animate__faster
              bg-white text-black relative flex flex-col w-full md:w-[calc(100vw-40px)] max-w-[1200px] h-full md:h-[600px] mt-5 md:mt-0 max-h-[98dvh] overflow-hidden rounded-2xl md:flex-row top-[10vh] transition-all ease-in duration-200 opacity-100 -translate-y-[10vh]"
        >
          <div className="close"></div>
          <div className="flex flex-col h-full">
            <div className="flex-1 relative overflow-auto">
              <div>
                <Image
                  src={Pr3}
                  alt="Box Café"
                  width={800}
                  className="max-h-[329px] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-auto">
                  <div className="flex flex-col px-1 pt-6">
                    <h1 className="mb-3 px-5 text-2xl font-bold">Americano</h1>
                    <p className="px-5 text-zinc-400 font-light">
                      Café americano, con doble shot espresso de café, 12 oz.
                    </p>
                    <div>
                      <form>
                        <div className="mt-6 border-t text-sm">
                          <div className="px-5 mt-5 mb-2 flex justify-between">
                            <span className="text-base font-semibold">
                              ¿Agregar extras?
                            </span>
                            <div className="text-xs font-semibold text-gray-400 bg-gray-100 flex justify-center items-center px-2 rounded-full">
                              Opcional
                            </div>
                          </div>
                          <div className="px-5 py-2">
                            <div className="flex justify-between">
                              <div className="flex flex-col">
                                <div>Shot espresso</div>
                                <div className="font-semibold">S/ 2.00</div>
                              </div>
                              <div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="h-[40px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comprar"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
