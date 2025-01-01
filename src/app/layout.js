import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "components/components/utils/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin']
});

export const metadata = {
  title: "Fianity",
  description: "Hi, I’m Mochamad Allifian Ar’Rasyid, a Software Engineering graduate passionate about web development, UI design, and creating impactful digital solutions under my personal brand, Fianity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-[family-name:var(--font-montserrat)] antialiased`}
      >
        <Navbar />
        {children}
        <script src="particles.min.js"></script>
        <script src="particles.js"></script>
      </body>
    </html>
  );
}
