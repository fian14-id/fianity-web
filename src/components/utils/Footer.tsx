"use client"
import { motion } from "framer-motion"
import Clock from "./Timelane"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMouseInteraction } from "@/app/hook/useMouseInteractions"

const Footer = () => {
    const pathname = usePathname();
    const { mouseProps } = useMouseInteraction();
    return (
        <motion.footer className="fixed left-0 w-full bottom-0 z-20 text-background mix-blend-difference" initial={{y: 50}} animate={{y: 0}} transition={{duration: 0.5, ease: "easeIn"}}>
            <section className="flex justify-between items-center w-full px-6 mx-auto max-w-[90rem]">
                <main className="flex gap-2 font-extralight text-xs">
                    <Link {...mouseProps} href={pathname.replace('/en', '/id')} title="mengubah bahasa" >ID</Link>
                    <Link {...mouseProps} href={pathname.replace('/id', '/en')} title="changes language" >EN</Link>
                </main>
                <h1 className="font-extralight">ꦠꦶꦪꦁꦗꦮꦶ</h1>
                <Clock className="font-light text-xs md:text-sm" />
            </section>
        </motion.footer>
    )
}

export default Footer