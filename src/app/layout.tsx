import Header from "@/components/shared/Header/Header";
import "./globals.css";
import {  Montserrat } from "next/font/google";
import Footer from "@/components/shared/Footer/Footer";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-normal w-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
