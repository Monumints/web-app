import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./ui/globals.css";
import NavBar from "./ui/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monumints",
  description: "Monumints: Tokenize your trips!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="px-48">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
