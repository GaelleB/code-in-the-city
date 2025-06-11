"use client";
import { ReactNode } from "react";

export default function FilmOverlay({ children }: { children: ReactNode }) {
    return <div className="relative film-overlay">{children}</div>;
}