import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FavoritesProvider } from '../app/context/favoritescontext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const novaSquare = localFont({
  src: "./fonts/NovaSquare.ttf",
  variable: "--font-nova-square",
  weight: "400",
});
  

export const metadata: Metadata = {
  title: "Prueba tecnica JDZM",
  description: "Esta prueba tecnica es de Juan David Zapata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${novaSquare.variable} antialiased`}>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}


