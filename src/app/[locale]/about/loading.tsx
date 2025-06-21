"use client";
import React, { FC, useEffect, useState } from "react";

interface PropsType {
    loadingElementRef: React.RefObject<HTMLElement | null>;
    loadingState: boolean;
}

const LocaleLoading:FC<PropsType> = ({loadingElementRef, loadingState}) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    useEffect(() => {
      if(!loadingState) {
        const visible = setTimeout(() => {
          setIsVisible(false)
        }, 5000);

      return () => clearTimeout(visible);
      }
    }, [loadingState])

    return (
        <>
           <main className={`loading ${isVisible ? "flex" : "hidden"} z-29 fixed inset-0 text-background justify-end items-end p-12 estetika font-bold`}>
        <span
          ref={loadingElementRef}
          className="text-6xl md:text-8xl"
        >
          0
        </span>
        <span className="text-4xl mb-2">%</span>
      </main>

      <div className={`${isVisible ? "flex" : "hidden"} z-28 fixed inset-0`}>
        <div className="bar-1 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-2 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-3 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-4 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-5 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-6 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-7 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-8 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-9 w-[10%] h-[100vh] bg-accent" />
        <div className="bar-10 w-[10%] h-[100vh] bg-accent" />
      </div>
        </>
    )
}

export default LocaleLoading