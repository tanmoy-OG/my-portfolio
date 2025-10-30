"use client"
import React, { useRef, useState } from "react";

interface Props {
    mt: number
    ml: number
    mlNegative: boolean
    text: string
}

const ShimmerText = ({ mt, ml, mlNegative, text }: Props) => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const bounds = (containerRef.current as HTMLDivElement).getBoundingClientRect();
            const x = (e.clientX - bounds.left) / bounds.width;
            const y = (e.clientY - bounds.top) / bounds.height;
            setMousePos({ x, y });
        }
    };


    const gradient = `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%)`;

    return (
        <div
            ref={containerRef}
            className={`absolute flex flex-col justify-center font-sans-bg font-extrabold text-[20rem] opacity-10 select-none h-[200vh] z-10 -mt-${mt}`}
            onMouseMove={handleMouseMove}
        >
            {mlNegative ? (<span
                className={`text-foreground/40 uppercase bg-clip-text transition-none pointer-events-none -ml-${ml}`}
                style={{
                    backgroundImage: gradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                }}
            >
                {text}
            </span>) : (<span
                className={`text-foreground/40 uppercase bg-clip-text transition-none pointer-events-none ml-${ml}`}
                style={{
                    backgroundImage: gradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                }}
            >
                {text}
            </span>)}
        </div>
    );
};

export default ShimmerText;