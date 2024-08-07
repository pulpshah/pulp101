// src/app/layout.tsx
"use client"; // Ensure this is at the top

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'; // Adjust the path as necessary
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = pathname !== '/login';

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            {showSidebar && <Sidebar />}
            <main className={`flex-1 p-5 bg-white overflow-y-auto ${!showSidebar ? 'w-full' : ''}`}>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

