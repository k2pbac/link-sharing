import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import "./main.scss";
const instr = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devlinks",
  description: "Add and share your socials with other people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instr.className + "min-h-screen min-w-screen"}>
        {children}
      </body>
    </html>
  );
}
