import Image from "next/image";
import { LogoFooter } from "../../../../public";

const footerLinks = {
  column1: [
    {
      id: 1,
      name: "Despachos",
    },
    {
      id: 2,
      name: "Trabaja con nosotros",
    },
    {
      id: 3,
      name: "Nosotros",
    },
    {
      id: 4,
      name: "informes@montcafe.com",
    },
    {
      id: 5,
      name: "Términos y condiciones",
    },
    {
      id: 6,
      name: "Políticas de privacidad",
    },
  ],
  column2: [
    {
      id: 1,
      name: "Instagram",
    },
    {
      id: 2,
      name: "Facebook",
    },
  ],
  column3: [
    {
      id: 1,
      name: "Pedir",
    },
    {
      id: 2,
      name: "Montcafé Club",
    },
    {
      id: 3,
      name: "Iniciar sesión",
    },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1200px] py-6 px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 place-content-center">
          <div className="w-full flex justify-center items-center mb-4">
            <Image src={LogoFooter} alt="logo" width={120} height={75} />
          </div>
          <div className="text-textFooter mb-6">
            <span className="text-lg font-semibold">Conócemos</span>
            <ul className="space-y-2 mt-4">
              {footerLinks.column1.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className="text-textFooter mb-6">
            <span className="text-lg font-semibold">Redes Sociales</span>
            <ul className="space-y-2 mt-4">
              {footerLinks.column2.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div className="text-textFooter">
            <span className="text-lg font-semibold">Mi cuenta</span>
            <ul className="space-y-2 mt-4">
              {footerLinks.column3.map((link) => (
                <li key={link.id}>{link.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
