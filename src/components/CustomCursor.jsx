"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.className = `
      fixed top-0 left-0 w-[28px] h-[28px] rounded-full
      pointer-events-none z-[9999]
      bg-black/10 dark:bg-white/10
      backdrop-blur-md
      border border-black/20 dark:border-white/20
      shadow-[0_0_8px_rgba(0,0,0,0.15)] dark:shadow-[0_0_8px_rgba(255,255,255,0.15)]
      transition-transform duration-200 ease-out
    `;

    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 14}px, ${e.clientY - 14}px)`; // center
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
