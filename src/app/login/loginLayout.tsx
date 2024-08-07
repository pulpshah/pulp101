// src/app/login/loginLayout.tsx
"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'; // Adjust the path as necessary
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-1 p-5 bg-white overflow-y-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
