"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { series } from "@/data/series";
import { musiques } from "@/data/musiques";
// import { lieux } from "@/data/lieux";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Accueil", href: "/" }
    ];

    // Page d'accueil
    if (pathname === "/") {
      return [{ label: "Accueil" }];
    }

    const segments = pathname.split("/").filter(Boolean);

    // Routes principales
    if (segments[0] === "series") {
      breadcrumbs.push({ label: "Séries", href: "/series" });

      // Page détail série
      if (segments[1]) {
        const serieId = parseInt(segments[1]);
        const serie = series.find(s => s.id === serieId);
        if (serie) {
          breadcrumbs.push({ label: serie.title });
        }
      }
    }

    else if (segments[0] === "music") {
      breadcrumbs.push({ label: "Musique", href: "/music" });

      // Page détail artiste
      if (segments[1]) {
        const artisteId = parseInt(segments[1]);
        const artiste = musiques.find(a => a.id === artisteId);
        if (artiste) {
          breadcrumbs.push({ label: artiste.nom });
        }
      }
    }

    else if (segments[0] === "locations") {
      breadcrumbs.push({ label: "Lieux de tournage", href: "/locations" });

      // Sous-pages locations
      if (segments[1] === "itineraires-geek") {
        breadcrumbs.push({ label: "Itinéraires geek" });
      } else if (segments[1] === "inspiration-ny") {
        breadcrumbs.push({ label: "Inspiration NY" });
      }
    }

    else if (segments[0] === "articles") {
      breadcrumbs.push({ label: "Articles", href: "/articles" });

      // Page détail article
      if (segments[1]) {
        // Vous pouvez ajouter la logique pour récupérer le titre de l'article
        breadcrumbs.push({ label: "Article" });
      }
    }

    else if (segments[0] === "about") {
      breadcrumbs.push({ label: "À propos" });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Ne pas afficher si c'est juste "Accueil"
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="breadcrumb mb-6" aria-label="Fil d'Ariane">
      <ol className="flex items-center space-x-2 text-sm text-[var(--color-dark)]/70">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-[var(--color-dark)]/40">
                /
              </span>
            )}

            {item.href ? (
              <Link
                href={item.href}
                className="text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors duration-200 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-dark)] font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}