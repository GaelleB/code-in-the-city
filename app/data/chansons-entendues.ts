export interface ChansonEntendue {
    serieId: number;
    serieNom: string;
    chansons: {
        titre: string;
        artiste: string;
    }[];
}

export const chansonsEntendues: ChansonEntendue[] = [
    {
        serieId: 1,
        serieNom: "Dawson's Creek",
        chansons: [
            { titre: "As I Lay Me Down", artiste: "Sophie B. Hawkins" },
            { titre: "Kiss the Rain", artiste: "Billie Myers" },
            { titre: "Ready for a Fall", artiste: "PJ Olsson" }
        ]
    },
    {
        serieId: 2,
        serieNom: "Les Frères Scott",
        chansons: [
            { titre: "Winter", artiste: "Joshua Radin" },
            { titre: "Halo", artiste: "Bethany Joy Lenz" },
            { titre: "The Good Kind", artiste: "The Wreckers" },
            { titre: "When It Comes", artiste: "Tyler Hilton" }
        ]
    },
    {
        serieId: 3,
        serieNom: "Gilmore Girls",
        chansons: [
            { titre: "Reflecting Light", artiste: "Sam Phillips" },
            { titre: "There She Goes", artiste: "The La’s" },
            { titre: "Then She Appeared", artiste: "XTC" }
        ]
    },
    {
        serieId: 4,
        serieNom: "Desperate Housewives",
        chansons: [
            { titre: "Breathe (2AM)", artiste: "Anna Nalick" },
            { titre: "Band of Gold", artiste: "Freda Payne" },
            { titre: "Thank You", artiste: "Dido" }
        ]
    },
    {
        serieId: 5,
        serieNom: "Gossip Girl",
        chansons: [
            { titre: "Young Folks", artiste: "Peter Bjorn and John" },
            { titre: "With Me", artiste: "Sum 41" },
            { titre: "You've Got the Love", artiste: "Florence + The Machine" }
        ]
    },
    {
        serieId: 6,
        serieNom: "Grey's Anatomy",
        chansons: [
            { titre: "How to Save a Life", artiste: "The Fray" },
            { titre: "Chasing Cars", artiste: "Snow Patrol" },
            { titre: "Keep Breathing", artiste: "Ingrid Michaelson" },
            { titre: "The Story", artiste: "Brandi Carlile" }
        ]
    },
    {
        serieId: 7,
        serieNom: "Private Practice",
        chansons: [
            { titre: "Breakable", artiste: "Ingrid Michaelson" },
            { titre: "Closer to You", artiste: "Brandi Carlile" }
        ]
    },
    {
        serieId: 8,
        serieNom: "This Is Us",
        chansons: [
            { titre: "Death with Dignity", artiste: "Sufjan Stevens" },
            { titre: "Salvation", artiste: "Gabrielle Aplin" },
            { titre: "Somewhere Only We Know", artiste: "Keane" }
        ]
    }
];