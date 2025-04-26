export type Serie = {
  id: number;
  title: string;
  originalTitle: string;
  years: string;
  synopsis: string;
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
  }
];