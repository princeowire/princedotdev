import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/footer";
import BlobityCursor from "@/components/blob/blobitycursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prince Dot Dev",
  description: "a portfolio website for Prince Owire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet"></link>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Nav />
      <BlobityCursor className="max-md:hidden" />
      <main>{children}</main>

      <Footer />
    </body>
  </html>
  );
}
