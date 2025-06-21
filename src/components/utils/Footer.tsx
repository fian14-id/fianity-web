"use client"
import { motion } from "framer-motion"
import Clock from "./Timelane"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMouseInteraction } from "@/app/hook/useMouseInteractions"
import { useEffect } from "react"

const Footer = ({params}: {params: string}) => {
    const pathname = usePathname();
    const { mouseProps } = useMouseInteraction();
    // console.log(pathname)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } ,[pathname])
    return (
        <motion.footer className="fixed left-0 w-full bottom-0 z-20 text-background mix-blend-difference" initial={{y: 50}} animate={{y: 0}} transition={{duration: 0.5, ease: "easeIn"}}>
            <section className="flex justify-between items-center w-full px-6 mx-auto max-w-[90rem]">
                <main className="flex gap-4 md:gap-2 font-extralight text-xs">
                    <Link {...mouseProps} href={pathname.charAt(1) === params.charAt(0) ? pathname.replace('/en', '/id') : pathname} className={`${params === "id" ? "opacity-50 cursor-not-allowed" : ""}`} title="mengubah bahasa" >ID</Link>
                    <Link {...mouseProps} href={pathname.charAt(1) === params.charAt(0) ? pathname.replace('/id', '/en') : pathname} className={`${params === "en" ? "opacity-50 cursor-not-allowed" : ""}`} title="changes language" >EN</Link>
                </main>
                <h1 className="font-extralight">ꦠꦶꦪꦁꦗꦮꦶ</h1>
                <Clock className="font-light text-xs md:text-sm" />
            </section>
        </motion.footer>
    )
}

export default Footer