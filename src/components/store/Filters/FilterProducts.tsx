import { SlArrowRight, SlCup, SlMagnifier } from "react-icons/sl";

const filters = [
  {
    id: "box-cafe",
    name: "Box Café",
  },
  {
    id: "espresso",
    name: "Espresso",
  },
  {
    id: "bebdias-frias",
    name: "Bebidas Frías",
  },
  {
    id: "salados",
    name: "Salados",
  },
  {
    id: "postres",
    name: "Postres",
  },
  {
    id: "desayunos",
    name: "Desayunos",
  },
  {
    id: "tortas",
    name: "Tortas",
  },
  {
    id: "cafe-tostado",
    name: "Café Tostado",
  },
];

export default function FilterProducts() {
  return (
    <div>
      <div className="w-full h-[59px] border-y-[1px] mt-8 px-4 flex items-center">
        <button className="mr-4">
          <SlMagnifier />
        </button>
        <div className="flex gap-1 overflow-x-scroll whitespace-nowrap scroll-smooth">
          {filters.map((filter) => (
            <a key={filter.id} className="cursor-pointer py-4 px-2 md:pt-8">
              {filter.name}
            </a>
          ))}
        </div>
      </div>
      <div className="my-6">
        <div className="w-full px-4">
          <div className="bg-black text-white rounded-md h-[92px] flex py-4 px-7 items-center cursor-pointer gap-2">
            <div>
              <SlCup />
            </div>
            <div className="text-xs flex flex-col">
              <span className="text-base">¡Acumula <span className="font-bold">Montcafé Club</span>!</span>
              <span>
                Regístrate, gana puntos con tus compras y canjealos por
                productos y más
              </span>
            </div>
            <div>
              <SlArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
