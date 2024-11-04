import {
  almuerzos,
  bedidasFrias,
  boxCafe,
  cafeTostado,
  desayunos,
  espressos,
  postres,
  salados,
  tortas,
} from "@/core/constants/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="w-full px-4 ">
      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Box Café</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {boxCafe.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Espressos</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {espressos.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Bebidas Frías</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {bedidasFrias.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Salados</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {salados.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Postres</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {postres.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Almuerzos</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {almuerzos.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Desayunos</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {desayunos.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Tortas</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {tortas.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <span className="text-card font-bold text-3xl">Café Tostado</span>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {cafeTostado.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
