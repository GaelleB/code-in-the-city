export type Article = {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
    content: string[];
};

export const articles: Article[] = [
    {
        id: 1,
        title: "HTML & CSS : la base de tout",
        date: "2025-06-20",
        category: "Développement Web",
        image: "/images/html-css.webp",
        content: [
            `On m’a dit : “Le HTML, c’est pas vraiment du code.”
            On m’a dit : “Le CSS, c’est juste de la mise en page.”
            Et pourtant, c’est avec ça que tout a commencé.`,

            `Un <h1> timide  
            Quand j’ai commencé ma formation de développeuse web, je ne comprenais pas grand-chose.  
            Je venais du paramédical, j’avais quitté une vie qui ne me convenait plus, et j’entrais dans un monde où on parlait de balises, de classes, de margin et de padding comme si tout ça allait de soi.`,

            `Sauf que moi, rien n’allait de soi.
            Et puis un jour, on m’a dit d’écrire ceci : <h1>Bonjour, monde</h1>

            C’était simple. Trop simple peut-être.
            Mais quand j’ai vu ces mots s’afficher en grand dans mon navigateur, quelque chose s’est passé.
            C’était moi qui les avais placés là. Moi qui contrôlais. Moi qui créais.`,

            `Le HTML, c’est les fondations  
            On dit souvent que HTML, c’est pas “du vrai code”.  
            Que ce n’est qu’un langage de structure, une suite de balises.

            Mais ce qu’on oublie de dire, c’est que sans structure… rien ne tient.  
            C’est comme construire un livre sans titres, sans chapitres, sans ordre.

            Le HTML, c’est la colonne vertébrale.  
            C’est lui qui dit : “Voici un titre. Voici un paragraphe. Voici un lien.”  
            Et quand tu le comprends, tu comprends aussi que coder, ce n’est pas seulement écrire…  
            C’est organiser, raconter, donner du sens.`,

            `Le CSS, c’est la voix  
            Un jour, j’ai changé la couleur d’un titre. Juste pour voir.  
            Je l’ai mis en bleu. Puis j’ai mis un fond rose. Puis j’ai testé un hover qui le faisait grandir.  
            Et j’ai ri. Comme une gamine qui découvre un nouveau jouet.

            Le CSS, ce n’est pas “de la déco”.  
            C’est la voix du site. Son ton. Son style. Sa manière de te dire : “Regarde, je suis vivant.”`,

            `Grâce au CSS, j’ai appris à parler autrement.  
            Pas avec des mots, mais avec des marges. Avec des arrondis. Avec des transitions douces.  
            Et petit à petit, j’ai commencé à créer des choses qui me ressemblaient.`,

            `Non, ce n’est pas juste pour les développeurs  
            Aujourd’hui, je code avec Next.js.  
            J’anime mes pages avec GSAP. J’utilise Tailwind, React, et des outils que je n’aurais même pas compris il y a deux ans.

            Mais rien de tout ça ne fonctionnerait sans le HTML et le CSS.  
            Rien.

            C’est comme faire une chanson sans mélodie, ou écrire un roman sans ponctuation.

            Alors oui, peut-être que certains diront que ce n’est “pas de la programmation”.  
            Mais moi, je m’en fiche.

            Parce que sans ça, je ne serais pas là.  
            Parce que sans ça, je n’aurais jamais eu ce déclic.  
            Ce petit frisson.  
            Ce moment où j’ai compris : je suis capable de construire quelque chose. Et ça commence avec un <div>.`,

            `Et maintenant ?  
            Je ne suis plus une débutante.  
            Mais je ne suis pas non plus arrivée, et je crois que je ne le serai jamais, parce que le code, c’est comme la vie : on apprend sans fin.

            Mais aujourd’hui, je voulais simplement rendre hommage à ces deux langages que certains regardent de haut…et qui pourtant ont été mes premiers piliers.

            HTML & CSS.
            Deux mots simples.  
            Mais deux mots qui m’ont ouvert un monde.

            🖋 Et toi, tu te souviens de ta première balise ?`,
        ],
    },

  // … tes autres articles
];
