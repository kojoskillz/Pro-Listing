import type { Metadata } from "next";
import localFont from "next/font/local";
import { Agdasima} from 'next/font/google';
import "./globals.css";

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
const agdasima = Agdasima({
  subsets: ["latin"],
  variable: "--font-agdasima",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pro-listing",
  description: "Crypto-listing web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
             className={`${geistSans.variable} ${geistMono.variable} ${agdasima.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
