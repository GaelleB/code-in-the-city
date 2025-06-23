import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-serif font-bold mb-6 border-b-2 border-[var(--color-secondary)] pb-2">
        Bienvenue sur Code in the City
      </h1>

      <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-6">
        Ici, je t’invite dans mon carnet de bord où le <code>HTML</code>  
        danse avec la bande originale de tes séries préférées,  
        et où chaque ligne de code est un souvenir que je partage.
      </p>

      <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-6">
        Entre chronique web, itinéraire de tournage et playlist émotion,  
        tu découvriras un blog à la croisée des mondes :  
        celui de l’émotion et celui de la technologie.
      </p>

      <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-8">
        Pas de bla-bla technique à rallonge :  
        je te montre mes déclics, mes ratés, et mes coups de cœur,  
        avec la même sincérité que j’ai quand je réécoute  
        un générique ou que je teste un nouveau <code>flex</code>.
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
          Plonger dans les séries
        </Link>
      </div>
    </main>
  );
}