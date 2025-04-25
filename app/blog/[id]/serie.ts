export type Serie = {
    id: number;
    title: string;
    originalTitle: string;
    years: string;
    synopsis: string;
    casting: {
        actor: string;
        character: string;
        ageAtStart: number;
    }[];
    anecdotes: string[];
    musiques: string[];
    ressentiJeune: string;
    ressentiAdulte: string;
    image: string;
    content: string;
  };
  
  export const series: Serie[] = [
    {
      id: 1,
      title: "Dawson's Creek",
      originalTitle: "Dawson's Creek",
      years: "1998 - 2003",
      synopsis: "Un groupe d'ados dans une petite ville côtière navigue entre amours, rêves et doutes.",
      casting: [
        { actor: "James Van Der Beek", character: "Dawson Leery", ageAtStart: 21 },
        { actor: "Katie Holmes", character: "Joey Potter", ageAtStart: 19 },
        { actor: "Joshua Jackson", character: "Pacey Witter", ageAtStart: 20 },
        { actor: "Michelle Williams", character: "Jen Lindley", ageAtStart: 18 }
      ],
      anecdotes: [
        "Katie Holmes passait ses auditions depuis sa cave à Toledo.",
        "Joshua Jackson avait auditionné pour le rôle de Dawson à l'origine."
      ],
      musiques: ["Paula Cole - I Don’t Want to Wait"],
      ressentiJeune: "À 14 ans, je rêvais de Joey, de Pacey, de leurs silences qui disaient tout.",
      ressentiAdulte: "Aujourd'hui, je ressens la nostalgie douce de Dawson qui refuse de grandir.",
      image: "/images/dawson.jpg",
      content: "Un jour, j’écrirai un article entier sur cette série qui m’a fait croire en l’amour adolescent."
    },
    // autres séries ici
];  