import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import  ThemeHeader  from "@/components/theme_header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body suppressHydrationWarning className={`${inter.className}`}>
          {/* <Header /> */}
          <ThemeHeader />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <Footer />

      
        </body>
      </html>
      
    </ClerkProvider>
  );
}
