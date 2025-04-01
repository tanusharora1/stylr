import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stylr - Your Local Fashion Marketplace",
  description: "Shop from your favorite local fashion brands and stores with same-day delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-charcoal text-iceblue`}>
        <CartProvider>
          <Navbar />
          <div className="pt-16"> {/* Add padding to account for fixed navbar */}
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
