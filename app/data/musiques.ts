export interface Artiste {
    id: number;
    nom: string;
    image: string;
    seriesLiees: string[];
    chansonsConnues: string[];
    anecdotes?: string[];
}

    export const musiques: Artiste[] = [
    {
        id: 1,
        nom: "Paula Cole",
        image: "/images/paula-cole.jpg",
        seriesLiees: ["Dawson's Creek"],
        chansonsConnues: ["I Don't Want to Wait"],
    },
    {
        id: 2,
        nom: "Gavin DeGraw",
        image: "/images/gavin-degraw.jpg",
        seriesLiees: ["Les Frères Scott"],
        chansonsConnues: ["I Don't Want to Be"],
    },
    {
        id: 3,
        nom: "Carole King & Louise Goffin",
        image: "/images/carole-king-louise-goffin.jpg",
        seriesLiees: ["Gilmore Girls"],
        chansonsConnues: ["Where You Lead"],
    },
    {
        id: 4,
        nom: "Danny Elfman",
        image: "/images/danny-elfman.jpg",
        seriesLiees: ["Desperate Housewives"],
        chansonsConnues: ["Wisteria Lane Theme"],
    },
    {
        id: 5,
        nom: "Transcenders",
        image: "/images/transcenders.jpg",
        seriesLiees: ["Gossip Girl"],
        chansonsConnues: ["Gossip Girl Main Title"],
    },
    {
        id: 6,
        nom: "Anna Nalick",
        image: "/images/anna-nalick.jpg",
        seriesLiees: ["Private Practice"],
        chansonsConnues: ["Breathe (2AM)"],
    },
    {
        id: 7,
        nom: "Siddhartha Khosla",
        image: "/images/siddhartha-khosla.jpg",
        seriesLiees: ["This Is Us"],
        chansonsConnues: ["This Is Us Theme"],
    },
];