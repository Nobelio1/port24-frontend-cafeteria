import Image from "next/image";
import { Categoria1, Categoria2, Categoria3, Categoria4, Categoria5, Categoria6, Categoria7 } from "../../../../public";

const categories = [
  {
    id: "c1",
    name: 'Postres',
    img: Categoria1
  },
  {
    id: "c2",
    name: 'Espressos',
    img: Categoria2
  },
  {
    id: "c3",
    name: 'Bebidas Frías',
    img: Categoria3
  },
  {
    id: "c4",
    name: 'Salados',
    img: Categoria4
  },
  {
    id: "c5",
    name: 'Almuerzos',
    img: Categoria5
  },
  {
    id: "c6",
    name: 'Tortas',
    img: Categoria6
  },
  {
    id: "c7",
    name: 'Chocolate',
    img: Categoria7
  }
]

export default function Categories() {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap overflow-hidden items-end">
        <div className="w-full text-center text-textFooter text-3xl font-semibold mb-10">CATEGORÍAS</div>
        {
          categories.map((category) => (
            <div key={category.id} className="flex-grow flex-shrink-0 basis-1/2 md:basis-1/4 p-4 ">
              <Image src={category.img} alt="Category" className="min-w-[375px] md:min-w-full md:max-h-[250px] object-cover rounded-md hover:cursor-pointer hover:opacity-70" />
            </div>
          ))
        }
      </div>
    </div>
  );
}