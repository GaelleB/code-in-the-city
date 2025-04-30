export type Artiste = {
    id: number;
    nom: string;
    image?: string;
    seriesLiees: string[];
    chansonsConnues: string[];
    anecdotes?: string[];
};

export const musiques: Artiste[] = [
    {
        id: 1,
        nom: "Joshua Radin",
        image: "/images/joshua.jpg",
        seriesLiees: ["Les Frères Scott", "Grey's Anatomy"],
        chansonsConnues: ["Winter", "I'd Rather Be With You"],
        anecdotes: [
            "Découvert grâce à Zach Braff, il devient une voix incontournable des séries drama."
        ]
    },
    {
        id: 2,
        nom: "Gavin DeGraw",
        image: "/images/gavin.jpg",
        seriesLiees: ["Les Frères Scott"],
        chansonsConnues: ["I Don't Want to Be", "Follow Through"],
        anecdotes: [
            "Son titre emblématique a servi d’opening pendant 8 saisons de One Tree Hill."
        ]
    },
    {
        id: 3,
        nom: "Snow Patrol",
        image: "/images/snowpatrol.jpg",
        seriesLiees: ["Grey's Anatomy", "The O.C."],
        chansonsConnues: ["Chasing Cars", "Run"],
        anecdotes: [
            "Chasing Cars a été jouée dans l’un des moments les plus bouleversants de Grey’s Anatomy."
        ]
    }
];