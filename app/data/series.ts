export type Serie = {
  id: number;
  title: string;
  originalTitle: string;
  years: string;
  synopsis: string;
  lieux: string;
  castingBySeason: {
    [season: string]: {
      actor: string;
      character: string;
      ageAtStart: number;
    }[];
  };
  anecdotes: string[];
  musiques: string[];
  ressentiJeune: string;
  ressentiAdulte: string;
  image: string;
};

export const series: Serie[] = [
  {
    id: 1,
    title: "Dawson's Creek",
    originalTitle: "Dawson's Creek",
    years: "1998 - 2003",
    synopsis: "Un groupe d'ados dans une petite ville côtière navigue entre amours, rêves et doutes.",
    lieux: "Wilmington, Caroline du Nord. Cape Fear River, Southport, ponton emblématique entre Joey et Dawson.",
    castingBySeason: {
      "Saison 1": [
      { actor: "James Van Der Beek", character: "Dawson Leery", ageAtStart: 21 },
      { actor: "Katie Holmes", character: "Joey Potter", ageAtStart: 19 },
      { actor: "Joshua Jackson", character: "Pacey Witter", ageAtStart: 20 },
      { actor: "Michelle Williams", character: "Jen Lindley", ageAtStart: 18 },
      { actor: "Mary-Margaret Humes", character: "Gail Leery", ageAtStart: 44 },
      { actor: "John Wesley Shipp", character: "Mitch Leery", ageAtStart: 43 },
      { actor: "Nina Repeta", character: "Bessie Potter", ageAtStart: 31 },
      { actor: "Mary Beth Peil", character: "Evelyn Ryan", ageAtStart: 58 }
      ],
      "Saison 2": [
        { actor: "Kerr Smith", character: "Jack McPhee", ageAtStart: 26 },
        { actor: "Meredith Monroe", character: "Andie McPhee", ageAtStart: 28 }
      ],
      "Saison 5": [
        { actor: "Busy Philipps", character: "Audrey Liddell", ageAtStart: 22 }
      ]
    },
    anecdotes: [
      "Katie Holmes passait ses auditions depuis sa cave à Toledo.",
      "Joshua Jackson avait auditionné pour le rôle de Dawson à l'origine."
    ],
    musiques: ["Paula Cole - I Don't Want to Wait"],
    ressentiJeune: "À 14 ans, je rêvais de Joey, de Pacey, de leurs silences qui disaient tout.",
    ressentiAdulte: "Aujourd'hui, je ressens la nostalgie douce de Dawson qui refuse de grandir.",
    image: "/images/dawson.jpg"
  },

  {
    id: 2,
    title: "Les Frères Scott",
    originalTitle: "One Tree Hill",
    years: "2003 - 2012",
    synopsis:
      "À Tree Hill, deux demi-frères ennemis, Lucas et Nathan Scott, se disputent la gloire du basket, l’amour, et leur place dans le monde.",
    lieux: "Wilmington, Caroline du Nord (USA)",
    castingBySeason: {
    "Saison 1": [
      { actor: "Chad Michael Murray", character: "Lucas Scott", ageAtStart: 22 },
      { actor: "James Lafferty", character: "Nathan Scott", ageAtStart: 18 },
      { actor: "Hilarie Burton", character: "Peyton Sawyer", ageAtStart: 21 },
      { actor: "Bethany Joy Lenz", character: "Haley James", ageAtStart: 22 },
      { actor: "Sophia Bush", character: "Brooke Davis", ageAtStart: 21 },
      { actor: "Paul Johansson", character: "Dan Scott", ageAtStart: 39 },
      { actor: "Moira Kelly", character: "Karen Roe", ageAtStart: 36 },
      { actor: "Barry Corbin", character: "Coach Whitey Durham", ageAtStart: 63 }
    ],
    "Saison 2": [
      { actor: "Michael Copon", character: "Felix Taggaro", ageAtStart: 22 },
      { actor: "Daniella Alonso", character: "Anna Taggaro", ageAtStart: 26 }
    ],
    "Saison 3": [
      { actor: "Tyler Hilton", character: "Chris Keller", ageAtStart: 22 }
    ],
    "Saison 4": [
      { actor: "Stephen Colletti", character: "Chase Adams", ageAtStart: 20 }
    ],
    "Saison 5": [
      { actor: "Robert Buckley", character: "Clay Evans", ageAtStart: 26 },
      { actor: "Shantel VanSanten", character: "Quinn James", ageAtStart: 22 },
      { actor: "Austin Nichols", character: "Julian Baker", ageAtStart: 27 },
      { actor: "Jana Kramer", character: "Alex Dupre", ageAtStart: 25 }
    ],
    "Saison 6": [
      { actor: "Jackson Brundage", character: "Jamie Scott", ageAtStart: 4 }
    ]
  },
    anecdotes: [
      "Chad Michael Murray avait auditionné pour jouer Nathan avant d'être choisi pour Lucas.",
      "Hilarie Burton (Peyton) n’avait jamais joué d'actrice professionnelle avant One Tree Hill."
    ],
    musiques: [
      "Gavin DeGraw - I Don't Want to Be",
    ],
    ressentiJeune:
      "À 15 ans, Tree Hill, c'était la promesse que l'amitié et l'amour guérissent tout.",
    ressentiAdulte:
      "Aujourd'hui, je perçois toute la douleur derrière les sourires de Tree Hill.",
    image: "/images/freres-scott.jpg",
  },
];