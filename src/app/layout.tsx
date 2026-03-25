import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mr Bet",
  icons: {
    icon: "/logomrbet.ico",
  },
  description: "Somos una plataforma que conecta a los usuarios de casinos legales con beneficios exclusivos. Desde acá podés registrarte según tu provincia y acceder a descuentos, promociones y experiencias pensadas para nuestra comunidad.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logomrbet.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
