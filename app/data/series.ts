export type Serie = {
  id: number;
  title: string;
  originalTitle: string;
  years: string;
  synopsis: string;
  musique: number[];
  lieux: number;
  castingBySeason: {
    [season: string]: {
      actor: string;
      character: string;
      ageAtStart: number;
    }[];
  };
  anecdotes: string[];
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
    musique: [3],
    lieux: 1,
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
    musique: [2],
    lieux: 1,
    castingBySeason: {
      "Saison 1": [
        { actor: "Chad Michael Murray", character: "Lucas Scott", ageAtStart: 22 },
        { actor: "James Lafferty", character: "Nathan Scott", ageAtStart: 18 },
        { actor: "Hilarie Burton", character: "Peyton Sawyer", ageAtStart: 21 },
        { actor: "Bethany Joy Lenz", character: "Haley James", ageAtStart: 22 },
        { actor: "Sophia Bush", character: "Brooke Davis", ageAtStart: 21 },
        { actor: "Barbara Alyn Woods", character: "Deb Scott", ageAtStart: 41 },
        { actor: "Paul Johansson", character: "Dan Scott", ageAtStart: 39 },
        { actor: "Moira Kelly", character: "Karen Roe", ageAtStart: 36 },
        { actor: "Barry Corbin", character: "Whitey Durham", ageAtStart: 63 },
        { actor: "Craig Sheffer", character: "Keith Scott", ageAtStart: 43 },
        { actor: "Lee Norris", character: "Marvin 'Micro' McFadden", ageAtStart: 21 },
        { actor: "Antwon Tanner", character: "Skills Taylor", ageAtStart: 28 },
        { actor: "Bevin Prince", character: "Bevin Mirskey", ageAtStart: 20 },
        { actor: "Bryan Greenberg", character: "Jake Jagielski", ageAtStart: 24 }
      ],
      "Saison 2": [
        { actor: "Michael Copon", character: "Felix Taggaro", ageAtStart: 22 },
        { actor: "Daniella Alonso", character: "Anna Taggaro", ageAtStart: 26 },
        { actor: "Danielle Harris", character: "Rachel Gatina", ageAtStart: 26 },
        { actor: "Tyler Hilton", character: "Chris Keller", ageAtStart: 21 },
        { actor: "Kieren Hutchison", character: "Andy Hargrove", ageAtStart: 30 },
        { actor: "Lindsey McKeon", character: "Taylor James", ageAtStart: 25 },
        { actor: "Colin Fickes", character: "Jimmy Edwards", ageAtStart: 23 }
      ],
      "Saison 3": [
        { actor: "Sheryl Lee", character: "Ellie Harp", ageAtStart: 38 },
        { actor: "Amber Wallace", character: "Glenda Farrell", ageAtStart: 22 },
        { actor: "Cullen Moss", character: "Junk Moretti", ageAtStart: 26 },
        { actor: "Vaughn Wilson", character: "Fergie Thompson", ageAtStart: 27 }
      ],
      "Saison 4": [
        { actor: "Stephen Colletti", character: "Chase Adams", ageAtStart: 20 },
        { actor: "Matt Barr", character: "Ian Banks", ageAtStart: 22 },
        { actor: "Kelsey Chow", character: "Gigi Silveri", ageAtStart: 17 },
        { actor: "Rick Fox", character: "Daunte Jones", ageAtStart: 37 }
      ],
      "Saison 5": [
        { actor: "Lisa Goldstein", character: "Millicent Huxtable", ageAtStart: 25 },
        { actor: "Torrey DeVitto", character: "Carrie", ageAtStart: 24 },
        { actor: "Joe Manganiello", character: "Owen Morello", ageAtStart: 30 },
        { actor: "Michaela McManus", character: "Lindsey Strauss", ageAtStart: 24 },
        { actor: "Kate Voegele", character: "Mia Catalano", ageAtStart: 21 },
        { actor: "Daphne Zuniga", character: "Victoria Davis", ageAtStart: 46 },
        { actor: "Robert Buckley", character: "Clay Evans", ageAtStart: 26 },
        { actor: "Shantel VanSanten", character: "Quinn James", ageAtStart: 23 }
      ],
      "Saison 6": [
        { actor: "Jackson Brundage", character: "Jamie Scott", ageAtStart: 4 },
        { actor: "Austin Nichols", character: "Julian Baker", ageAtStart: 27 },
        { actor: "Ashley Rickards", character: "Sam Walker", ageAtStart: 17 },
        { actor: "James Van Der Beek", character: "Reese Dixon", ageAtStart: 31 }
      ],
      "Saison 7": [
        { actor: "India de Beaufort", character: "Miranda Stone", ageAtStart: 22 },
        { actor: "Kate French", character: "Renee Richardson", ageAtStart: 25 },
        { actor: "Scott Holroyd", character: "David Fletcher", ageAtStart: 30 },
        { actor: "Amanda Schull", character: "Katie Ryan / Sara", ageAtStart: 30 }
      ],
      "Saison 8": [
        { actor: "Laura Izibor", character: "Erin McCree", ageAtStart: 24 },
        { actor: "Gregory Harrison", character: "Paul Norris", ageAtStart: 56 },
        { actor: "Chelsea Kane", character: "Tara Richards", ageAtStart: 23 }
      ],
      "Saison 9": [
        { actor: "Pierce Gagnon", character: "Logan Evans", ageAtStart: 6 },
        { actor: "Devin McGee", character: "Xavier Daniels", ageAtStart: 30 }
      ]
    },
    anecdotes: [
      "Chad Michael Murray avait auditionné pour jouer Nathan avant d'être choisi pour Lucas.",
      "Hilarie Burton (Peyton) n’avait jamais joué d'actrice professionnelle avant One Tree Hill."
    ],
    ressentiJeune:
      "À 15 ans, Tree Hill, c'était la promesse que l'amitié et l'amour guérissent tout.",
    ressentiAdulte:
      "Aujourd'hui, je perçois toute la douleur derrière les sourires de Tree Hill.",
    image: "/images/freres-scott.jpg",
  },
];