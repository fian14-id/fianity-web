import React from "react";

const BackgroundTexture = (children: React.ReactNode) => {
    return (
        <div className="w-full mx-auto max-w-[90rem] px-4 md:px-6">{children}</div>
    )
}

export default BackgroundTexture;