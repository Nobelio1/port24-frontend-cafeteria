"use client";

import Image from "next/image";
import { Pr3 } from "../../../../public";
import { IoMdCloseCircle } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useRouter, useParams } from "next/navigation";

export default function Pedir() {
  const router = useRouter();
  const { id } = useParams<{ id: string; title: string }>();

  const closeModal = () => {
    router.replace("/pedir", { scroll: false });
  };

  if (id && id.length > 0) {
    return (
      <div
        className="fixed z-[1000] inset-0 flex items-end  md:items-center justify-center bg-overlay "
        onClick={closeModal}
      >
        <div
          className="
              animate__animated animate__zoomIn animate__faster
              bg-white text-black relative flex flex-col w-full md:w-[calc(100vw-40px)] max-w-[1200px] h-full md:h-[600px] mt-5 md:mt-0 max-h-[98dvh] overflow-hidden rounded-2xl md:flex-row top-[10vh] transition-all ease-in duration-200 opacity-100 -translate-y-[10vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute z-30 top-2 right-2"
            onClick={closeModal}
          >
            <IoMdCloseCircle color="#0000003A" size={30} />
          </button>
          <div className="grid md:grid-cols-2 h-full">
            <div className="flex-1 relative overflow-hid">
              <div>
                <Image
                  src={Pr3}
                  alt="Box Café"
                  width={800}
                  className="object-fill"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col md:aspect-square">
                <div className="flex-1 overflow-auto">
                  <div className="flex flex-col px-1 pt-6">
                    <h1 className="mb-3 px-5 text-2xl font-bold">Americano</h1>
                    <p className="px-5 text-zinc-400 font-light">
                      Café americano, con doble shot espresso de café, 12 oz.
                    </p>
                    <div className="px-5">
                      <form>
                        <div className="mt-6 mb-3 border-t text-sm">
                          <div className=" mt-5 mb-2 flex justify-between">
                            <span className="text-base font-semibold">
                              ¿Agregar extras?
                            </span>
                            <div className="text-xs font-semibold text-gray-400 bg-gray-100 flex justify-center items-center px-2 rounded-full">
                              Opcional
                            </div>
                          </div>
                          <div className="divide-y">
                            <div className="space-x-5 py-2">
                              <div className="flex justify-between">
                                <div className="flex flex-col">
                                  <div>Shot espresso</div>
                                  <div className="font-semibold">S/ 2.00</div>
                                </div>
                                <div>
                                  <input type="checkbox"></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h5 className="scroll-m-20 text-lg font-bold tracking-tight">
                            Instrucciones especiales
                          </h5>
                          <div className="grid w-full items-center gap-1.5">
                            <textarea
                              className="flex min-h-[60px] w-full rounded-md border border-input bg-plain px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Incluye una nota"
                            ></textarea>
                          </div>
                        </div>
                      </form>
                      <div className="h-[40px]"></div>
                    </div>
                  </div>
                </div>

                <div className="py-5 px-8 border-t md:rounded-br-lg sticky bottom-0 md:relative">
                  <div className="space-y-2">
                    <div className="flex space-x-5">
                      <div>
                        <div className="grid w-full items-center gap-1.5">
                          <div className="w-[100px] flex items-center space-x-1">
                            <button>
                              <CiCircleMinus size={22} />
                            </button>
                            <div className="grid w-full items-center gap-1.5 text-center">
                              <div className="relative">
                                <input className="flex h-9 w-full rounded-md border border-input bg-plain px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-center" />
                              </div>
                            </div>
                            <button>
                              <CiCirclePlus size={22} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="flex flex-1 justify-center whitespace-nowrap items-center text-left px-4 py-2  bg-black text-white rounded-md">
                        <div className="flex-1 font-thin">Agregar</div>
                        <div className="font-thin">S/ 0.00</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
