"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "outline" | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  const variantClasses = {
    gold: "border border-brand-400/70 bg-gradient-to-r from-[#9b7020] via-[#c59b3f] to-[#9b7020] text-white shadow-md shadow-black/40 hover:-translate-y-0.5 hover:from-[#c59b3f] hover:to-[#9b7020] hover:shadow-lg hover:shadow-brand-500/25 active:translate-y-0 font-bold",
    outline: "border border-brand-500/50 bg-[#14100b]/80 text-brand-200 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-900/60 hover:text-white backdrop-blur-sm font-semibold",
    white: "border border-white/90 bg-white text-[#110d08] shadow-md hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg font-bold",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-500 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
