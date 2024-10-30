import Banner from "@/components/home/Banner/Banner";
import Hero from "@/components/home/Hero/Hero";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Hero />
      <Banner />
      {children}
    </div>
  );
}