export interface Artiste {
    id: number;
    nom: string;
    image: string;
    seriesLiees: string[];
    bo: string[];
    anecdotes?: string[];
}

export const musiques: Artiste[] = [
    {
        id: 1,
        nom: "Paula Cole",
        image: "/images/paula-cole.jpg",
        seriesLiees: ["Dawson's Creek"],
        bo: ["I Don't Want to Wait"],
    },
    {
        id: 2,
        nom: "Gavin DeGraw",
        image: "/images/gavin-degraw.jpg",
        seriesLiees: ["Les Frères Scott"],
        bo: ["I Don't Want to Be", "Chariot", "Soldier", "Follow Through", "Candy"],
    },
    {
        id: 3,
        nom: "Carole King & Louise Goffin",
        image: "/images/carole-king-louise-goffin.jpg",
        seriesLiees: ["Gilmore Girls"],
        bo: ["Where You Lead"],
    },
    {
        id: 4,
        nom: "Danny Elfman",
        image: "/images/danny-elfman.jpg",
        seriesLiees: ["Desperate Housewives"],
        bo: ["Wisteria Lane Theme"],
    },
    {
        id: 5,
        nom: "Transcenders",
        image: "/images/transcenders.jpg",
        seriesLiees: ["Gossip Girl"],
        bo: ["Gossip Girl Main Title"],
    },
    {
        id: 6,
        nom: "Chad Fissher",
        image: "/images/chad-fischer.jpg",
        seriesLiees: ["Private Practice"],
        bo: ["Private Practice Theme"],
    },
    {
        id: 7,
        nom: "Siddhartha Khosla",
        image: "/images/siddhartha-khosla.jpg",
        seriesLiees: ["This Is Us"],
        bo: ["This Is Us Theme"],
    },
];