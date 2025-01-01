"use client";
import { useRouter, useParams } from "next/navigation";
// import { motion } from "motion/react"

export default function Home() {
  const router = useRouter()
  const params = useParams()
  const handleFalse = async() => {
    console.log("Bye-bye!")
    router.push("/getout")
    setTimeout(() => {
      window.close()
    }, 1000)
  }
  return (
    <div className="flex w-full bg-[#242424] px-6 py-4 text-white md:px-8 md:py-6">
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <h2 className="text-9xl font-bold text-center">Can I introduce myself?</h2>
        <div className="flex gap-48 mt-24">
          <button className="font-medium text-lg duration-100 ease-in-out opacity-30 hover:opacity-100">yes</button>
          <button type="button" className="font-medium text-lg duration-100 ease-in-out opacity-30 hover:opacity-100" onClick={handleFalse}>no</button>
        </div>
      </main>
    </div>
  );
}
