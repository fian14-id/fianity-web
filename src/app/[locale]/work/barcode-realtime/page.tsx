import TableTexture from "@/components/utils/TableTexture"
import BarcodeComponent from "./BarcodeComponent"
import BarcodeDetail from "./BarcodeDetail"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Barcode Realtime",
  description: "Aplikasi web pembuat barcode secara instan tanpa tombol, iklan, atau delay.",
  keywords: "barcode, barcode generator, barcode realtime, barcode fianity, instant barcode",
  openGraph: {
    title: "Barcode Realtime",
    description: "Aplikasi web pembuat barcode secara instan tanpa tombol, iklan, atau delay.",
    url: "https://barcode.fianity.com", // Sesuaikan dengan URL
    siteName: "Barcode Realtime",
    images: [
      {
        url: "/images/barcode.png",
        width: 1200,
        height: 630,
        alt: "barcode realtime fianity",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcode Realtime",
    description: "Aplikasi web pembuat barcode secara instan tanpa tombol, iklan, atau delay.",
    images: ["/images/barcode.png"],
  },
}

const Page = () => {
  return (
      <section className="relative overflow-hidden border-x-1 border-foreground/10 py-20">
        <TableTexture />
        <BarcodeComponent />
        <BarcodeDetail />
      </section>
    )
}

export default Page