"use client";

import { animationPageIn } from "@/components/utils/animation";
import BackgroundTexture from "@/providers/BackgroundTexture";
import React, { useEffect } from "react";

const Template = ({children}: {children: React.ReactNode}) => {
    useEffect(() => {
        animationPageIn();
    }, []);
  return (
    <div className="flex relative">
        {[...Array(12).keys()].map((i) => (
            <div
                key={i}
                id={`banner-${i + 1}`}
                className={`min-h-full bg-accent z-50 fixed top-0 bottom-${i}/12 h-1/12`}
            />
        ))}
        <BackgroundTexture>
        {children}
        </BackgroundTexture>
    </div>
  )
}

export default Template

{/* <div id="banner-1" className="min-h-screen bg-accent z-50 fixed top-0 left-0 w-1/12" />
        <div id="banner-2" className="min-h-screen bg-accent z-50 fixed top-0 left-1/12 w-1/12" />
        <div id="banner-3" className="min-h-screen bg-accent z-50 fixed top-0 left-2/12 w-1/12" />
        <div id="banner-4" className="min-h-screen bg-accent z-50 fixed top-0 left-3/12 w-1/12" />
        <div id="banner-5" className="min-h-screen bg-accent z-50 fixed top-0 left-4/12 w-1/12" />
        <div id="banner-6" className="min-h-screen bg-accent z-50 fixed top-0 left-5/12 w-1/12" />
        <div id="banner-7" className="min-h-screen bg-accent z-50 fixed top-0 left-6/12 w-1/12" />
        <div id="banner-8" className="min-h-screen bg-accent z-50 fixed top-0 left-7/12 w-1/12" />
        <div id="banner-9" className="min-h-screen bg-accent z-50 fixed top-0 left-8/12 w-1/12" />
        <div id="banner-10" className="min-h-screen bg-accent z-50 fixed top-0 left-9/12 w-1/12" />
        <div id="banner-11" className="min-h-screen bg-accent z-50 fixed top-0 left-10/12 w-1/12" />
        <div id="banner-12" className="min-h-screen bg-accent z-50 fixed top-0 left-11/12 w-1/12" /> */}