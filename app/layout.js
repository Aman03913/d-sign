import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../Provider/Providers";
import Header from "./components/Header";
import { Divider } from "@nextui-org/react";
import Footer from "./components/landing/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} `}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
