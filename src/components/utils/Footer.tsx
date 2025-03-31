"use client"
import { motion } from "framer-motion"
import Clock from "./Timelane"

const Footer = () => {
    return (
        <motion.footer className="fixed left-0 w-full bottom-0 z-20 text-background mix-blend-difference" initial={{y: 50}} animate={{y: 0}} transition={{duration: 0.5, ease: "easeIn"}}>
            <section className="flex justify-between items-center w-full px-6 mx-auto max-w-[90rem]">
                <main className="flex gap-2 font-extralight text-xs">
                    <button title="mengubah bahasa" onClick={() => alert("Id")}>ID</button>
                    <button title="changes language" onClick={() => alert("En")}>EN</button>
                </main>
                <h1 className="font-extralight">ꦠꦶꦪꦁꦗꦮꦶ</h1>
                <Clock className="font-light text-xs md:text-sm" />
            </section>
        </motion.footer>
    )
}

export default Footer