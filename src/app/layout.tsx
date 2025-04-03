import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utils/Navbar";
import MouseEffect from "@/components/utils/MouseEffect";
import { MouseProvider } from "@/providers/MouseContext";
import Footer from "@/components/utils/Footer";
import BackgroundTexture from "@/providers/BackgroundTexture";
import CloseSection from "@/components/CloseSection";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased md:subpixel-antialiased relative`}
      >
        <MouseProvider>
            <Navbar />
            <BackgroundTexture>
              {children}
              <Footer />
            </BackgroundTexture>
            <MouseEffect />
            <CloseSection />
        </MouseProvider>
      </body>
    </html>
  );
}
