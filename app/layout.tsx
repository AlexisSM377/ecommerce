import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from '../components/navbar';
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";


// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: "Eccomerce ISA",
  description: "Welcome to Eccomerce ISA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
