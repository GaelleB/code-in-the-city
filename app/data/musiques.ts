export type Artiste = {
    id: number;
    nom: string;
    image?: string;
    seriesLiees: number[];
    chansonsConnues: string[];
    anecdotes?: string[];
};

export const musiques: Artiste[] = [
    {
        id: 1,
        nom: "Joshua Radin",
        image: "/images/joshua-radin.jpg",
        seriesLiees: [1],
        chansonsConnues: ["Winter", "I'd Rather Be With You"]
    },
    {
        id: 2,
        nom: "Gavin DeGraw",
        image: "/images/gavin-degraw.jpg",
        seriesLiees: [2],
        chansonsConnues: ["I Don't Want to Be", "Follow Through"]
    },
    {
        id: 3,
        nom: "Paula Cole",
        image: "/images/paula-cole.jpg",
        seriesLiees: [3],
        chansonsConnues: ["I Don't Want to Wait"],
    },
];