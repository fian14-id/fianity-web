import TableTexture from "@/components/utils/TableTexture"
import dynamic from "next/dynamic"
import { Metadata } from "next"
import LandingView from "@/components/utils/LandingView"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Barcode Realtime",
  description: "Aplikasi web pembuat barcode secara instan tanpa tombol, iklan, atau delay.",
  keywords: "barcode, barcode generator, barcode realtime, barcode fianity, instant barcode, ",
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
    images: ["/images/thumb-project/barcode.png"],
  },
}

const BarcodeDetail = dynamic(() => import('@/app/[locale]/work/barcode-realtime/BarcodeDetail'))

const Page = () => {
  return (
      <section className="relative overflow-hidden border-x-1 border-foreground/10 py-20">
        <TableTexture />
        {/* <BarcodeComponent /> */}
       <Suspense fallback={<p>Loading project...</p>}>
       <LandingView title="Barcode Realtime Generator Web App" description="Aplikasi web pembuat barcode secara instan tanpa tombol, iklan, atau delay. Dibuat untuk mendukung proses kerja cepat di cash processing center menggunakan React dan Tailwind CSS." url="https://barcode.fianity.com" image="/images/thumb-project/barcode.png" />
       </Suspense>
        <BarcodeDetail />
      </section>
    )
}

export default Page