import Image from "next/image";
import { Banner1 } from "../../../../public";

export default function Banner() {
  return (
    <div>
      <Image src={Banner1} alt="promocion24"  />
    </div>
  );
}