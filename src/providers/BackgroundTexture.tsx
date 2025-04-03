import React from "react";

interface BackgroundTextureProps {
    children: React.ReactNode
}

const BackgroundTexture = ({children}: BackgroundTextureProps) => {
    return (
        <div className="w-full mx-auto max-w-[90rem] px-4 md:px-6">{children}</div>
    )
}

export default BackgroundTexture;