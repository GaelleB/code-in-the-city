import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="typo-h1 font-serif font-bold mb-6 border-b-2 border-[var(--color-secondary)] pb-2">
        Bienvenue sur Code in the City
      </h1>

      <p className="typo-body text-[var(--color-dark)] mb-6">
        Ici, je t&apos;invite dans mon carnet de bord ou le <code>HTML</code> danse avec la bande originale
        de mes series preferees, et ou chaque ligne de code est un souvenir que je partage.
      </p>

      <p className="typo-body text-[var(--color-dark)] mb-6">
        Entre chronique web, itineraires de tournage et playlist emotion, tu decouvriras un blog a la croisee
        des mondes: celui de l&apos;emotion et celui de la technologie.
      </p>

      <p className="typo-body text-[var(--color-dark)] mb-8">
        Pas de bla-bla technique a rallonge: je te montre mes declics, mes rates, et mes coups de coeur, avec
        la meme sincerite que j&apos;ai quand je reecoute un generique ou que je teste un nouveau <code>flex</code>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/articles"
          className="inline-block border border-[var(--color-secondary)] text-[var(--color-dark)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-secondary)] hover:text-[var(--color-dark)] transition"
        >
          Explorer les articles
        </Link>
        <Link
          href="/series"
          className="inline-block border border-[var(--color-secondary)] text-[var(--color-dark)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--color-secondary)] hover:text-[var(--color-dark)] transition"
        >
          Plonger dans les series
        </Link>
      </div>
    </main>
  );
}
