import { Atom, Code, Keyboard, LayoutDashboard, LayoutTemplate, LoaderCircle, Megaphone, PenTool, Rocket, Waves, Zap } from "lucide-react";

const BarcodeDetail = () => {
  return (
    <main className="w-full h-full grid grid-cols-1 md:grid-cols-4 py-20">
      <article className="col-span-2">
        <h1 className="font-medium text-lg md:text-xl underline">
          Latar Belakang
        </h1>
        <p className="mt-2 text-sm">
          Saat bekerja sebagai kasir di <strong className="font-semibold">cash processing center</strong>, saya sering
          mengalami kendala ketika harus <strong className="font-semibold">membuat barcode baru.</strong> Sebagian besar
          alat yang tersedia mengharuskan <em className="">klik tombol, menunggu iklan, atau
          bahkan membuka aplikasi terlebih dahulu</em>, yang <strong className="font-semibold">memperlambat proses
          kerja</strong>, terutama saat kondisi sedang sibuk.
        </p>
      </article>
      <span className="col-span-2"></span>
      <article className="col-span-2 mt-6">
        <h1 className="font-medium text-lg md:text-xl underline">
          Permasalahan
        </h1>
        <ul className="mt-2 text-sm flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <span className=" bg-secondary p-2 rounded-md flex items-center">
              <LoaderCircle className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
              Proses pembuatan barcode lambat karena banyak langkah tambahan.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-secondary p-2 rounded-md flex items-center">
              <Megaphone className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
              Gangguan dari iklan atau loading aplikasi menghambat efisiensi
              kerja.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-secondary p-2 rounded-md flex items-center">
              <LayoutDashboard className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
              Tidak ada alat yang cukup sederhana dan langsung menampilkan hasil
              barcode saat mengetik.
            </p>
          </li>
        </ul>
      </article>
      {/* <span className="col-span-2"></span> */}
      <article className="col-span-2 mt-6">
        <h1 className="font-medium text-lg md:text-xl underline">
          Solusi
        </h1>
        <p>Saya mengembangkan aplikasi web sederhana namun efisien menggunakan:</p>
        <ul className="mt-2 text-sm flex flex-col gap-2 list-decimal">
          <li className="flex gap-2 items-center">
            <span className=" bg-foreground p-2 rounded-md flex items-center">
              <h2 className="w-4 h-4 shrink text-background">1</h2>
            </span>
            <p><strong className="font-semibold">React:</strong> untuk merender barcode secara real-time tanpa perlu klik tambahan.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-foreground p-2 rounded-md flex items-center">
              <h2 className="w-4 h-4 shrink text-background">2</h2>
            </span>
            <p>
            <strong className="font-semibold">Tailwind CSS:</strong> untuk tampilan minimalis, cepat, dan ringan.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-foreground p-2 rounded-md flex items-center">
              <h2 className="w-4 h-4 shrink text-background">3</h2>
            </span>
            <p>
            <strong className="font-semibold">Vercel:</strong> sebagai platform hosting dengan integrasi analytics untuk memantau traffic pengguna.
            </p>
          </li>
        </ul>
      </article>
      <span className="col-span-2"></span>
      <span className="col-span-2"></span>
      <article className="col-span-2 mt-6">
        <h1 className="font-medium text-lg md:text-xl underline">
        Fitur utamanya:
        </h1>
        <ul className="mt-2 text-sm flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <span className=" bg-accent p-2 rounded-md flex items-center">
              <Zap className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>Barcode langsung muncul saat input berubah.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-accent p-2 rounded-md flex items-center">
              <Keyboard className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
            Tanpa iklan, tanpa tombol submit.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-accent p-2 rounded-md flex items-center">
              <LayoutTemplate className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
            Tampilan bersih dan responsif.
            </p>
          </li>
        </ul>
      </article>
      <span className="col-span-2"></span>
      <article className="col-span-2 mt-6">
        <h1 className="font-medium text-lg md:text-xl underline">
        Hasil & Dampak
        </h1>
        <p className="mt-2 text-sm">
        Setelah selesai, saya mengujicobakan aplikasi ini kepada rekan kerja yang bertugas di bagian scanning. Aplikasi ini langsung mendapatkan feedback positif karena memangkas waktu dan meningkatkan kenyamanan kerja. Hingga saat ini, aplikasi tersebut masih aktif digunakan dalam proses kerja harian tim saya.
        </p>
        </article>
      <span className="col-span-2"></span>
      <article className="col-span-2 mt-6">
        <h1 className="font-medium text-lg md:text-xl underline">
        Teknologi yang Digunakan
        </h1>
        <ul className="mt-2 text-sm flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <span className=" bg-foreground p-2 rounded-md flex items-center">
              <Atom className="w-4 h-4 shrink text-sky-300" strokeWidth={3} />
            </span>
            <p>React.js
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-white p-2 rounded-md flex items-center">
              <Waves className="w-4 h-4 shrink text-sky-300" strokeWidth={3} />
            </span>
            <p>
            Tailwind CSS
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-foreground p-2 rounded-md flex items-center">
              <Rocket className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
            Vercel Hosting
            </p>
          </li>
        </ul>
        </article>
      <span className="col-span-2"></span>
      <article className="col-span-2 mt-6">
        <h1 className="font-medium text-lg md:text-xl underline">
        Peran Saya
        </h1>
        <ul className="mt-2 text-sm flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <span className=" bg-accent p-2 rounded-md flex items-center">
              <Code className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>Perancang dan pengembang tunggal
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <span className=" bg-accent p-2 rounded-md flex items-center">
              <PenTool className="w-4 h-4 shrink text-background" strokeWidth={3} />
            </span>
            <p>
            Bertanggung jawab atas desain UI/UX, coding, deployment, dan pengujian dengan pengguna nyata
            </p>
          </li>
        </ul>
        </article>
    </main>
  );
};

export default BarcodeDetail;
