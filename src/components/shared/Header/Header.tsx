import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../../../public";
import { SlLogin } from "react-icons/sl";

const navLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Cafetería",
    link: "/pedir",
  },
  {
    id: 3,
    name: "Choco",
    link: "/choco",
  },
  {
    id: 4,
    name: "Ubicacíon",
    link: "/locales",
  },
];

export default function Header() {
  return (
    <header className="w-full bg-black py-4 flex flex-col items-center lg:flex-row lg:justify-between">
      <div className="flex items-center justify-start md:justify-center lg:justify-start w-full relative lg:ml-6">
        <Image
          src={Logo}
          alt="Logo"
          width={180}
          height={100}
          className="md:w-[220px]"
        />
      </div>
      <div className="flex justify-center pt-4">
        <nav className="space-x-5 lg:space-x-7 lg:mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="text-white font-medium text-lg"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="bg-red-700 w-[166px] flex justify-center p-2 absolute right-0 top-[40px] lg:relative lg:-top-2 lg:ml-6">
          <button className="flex items-center gap-2 text-white font-medium ">
            Iniciar Sesión <SlLogin />
          </button>
        </div>
      </div>
    </header>
  );
}
