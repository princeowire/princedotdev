import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/footer";

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
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Nav />

      <main>{children}</main>

      <Footer />
    </body>
  </html>
  );
}
