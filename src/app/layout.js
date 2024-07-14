import { Karla } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";


const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Oladele Akomolede",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}
      <Header/>
      <main className="min-h-[70dvh]">
      {children}
      </main>
      <Footer/>

      </body>
    </html>
  );
}
