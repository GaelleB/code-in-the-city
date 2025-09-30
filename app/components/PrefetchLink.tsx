"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, useCallback } from "react";

interface PrefetchLinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
}

/**
 * Link component avec prefetch au hover pour améliorer les performances
 */
export default function PrefetchLink({ children, href, ...props }: PrefetchLinkProps) {
  const router = useRouter();

  const handleMouseEnter = useCallback(() => {
    if (typeof href === "string") {
      // Prefetch la page au hover
      router.prefetch(href);
    }
  }, [href, router]);

  return (
    <Link href={href} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </Link>
  );
}
