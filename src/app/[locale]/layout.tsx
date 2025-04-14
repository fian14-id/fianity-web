import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/utils/Navbar";
import MouseEffect from "@/components/utils/MouseEffect";
import { MouseProvider } from "@/providers/MouseContext";
import Footer from "@/components/utils/Footer";
import BackgroundTexture from "@/providers/BackgroundTexture";
import CloseSection from "@/components/CloseSection";
import { setRequestLocale } from "next-intl/server";
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} antialiased md:subpixel-antialiased relative`}
      >
        <NextIntlClientProvider>
        <MouseProvider>
          <Navbar />
          <BackgroundTexture>
            {children}
            <Footer />
          </BackgroundTexture>
          <MouseEffect />
          <CloseSection params={locale} />
        </MouseProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
