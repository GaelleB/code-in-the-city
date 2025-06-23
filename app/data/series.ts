export type Serie = {
  id: number;
  title: string;
  originalTitle: string;
  years: string;
  synopsis: string;
  lieux: number;
  musique: number[];
  casting: {
    actor: string;
    character: string;
    ageAtStart: number;
  }[];
  anecdotes: string[];
  image: string;
};

export const series: Serie[] = [
  {
    id: 1,
    title: "Dawson's Creek",
    originalTitle: "Dawson's Creek",
    years: "1998 – 2003",
    synopsis:
      "Dawson, Joey, Pacey et leurs amis traversent les tumultes de l'adolescence dans une petite ville de bord de mer, entre rêves de cinéma et chagrins d'amour.",
    lieux: 1,
    musique: [1],
    anecdotes: [
      "La maison de Dawson est une vraie maison située à Wilmington.",
      "La chanson 'I Don't Want to Wait' de Paula Cole est devenue culte."
    ],
    casting: [
      { actor: "James Van Der Beek", character: "Dawson Leery", ageAtStart: 21 },
      { actor: "Katie Holmes", character: "Joey Potter", ageAtStart: 19 },
      { actor: "Joshua Jackson", character: "Pacey Witter", ageAtStart: 20 }
    ],
    image: "/images/dawson.jpg"
  },
  {
    id: 2,
    title: "Les Frères Scott",
    originalTitle: "One Tree Hill",
    years: "2003 – 2012",
    synopsis:
      "Lucas et Nathan Scott, demi-frères que tout oppose, évoluent dans la ville fictive de Tree Hill, entre basket, amitiés complexes et histoires d’amour bouleversantes.",
    lieux: 2,
    musique: [2],
    anecdotes: [
      "Le Rivercourt a été démonté après la fin de la série.",
      "Gavin DeGraw y chante en live dans l’épisode final."
    ],
    casting: [
      { actor: "Chad Michael Murray", character: "Lucas Scott", ageAtStart: 22 },
      { actor: "James Lafferty", character: "Nathan Scott", ageAtStart: 18 },
      { actor: "Hilarie Burton", character: "Peyton Sawyer", ageAtStart: 21 }
    ],
    image: "/images/freres-scott.jpg"
  },
  {
    id: 3,
    title: "Gilmore Girls",
    originalTitle: "Gilmore Girls",
    years: "2000 – 2007",
    synopsis:
      "À Stars Hollow, Lorelai Gilmore élève seule sa fille Rory, entre caféine, références pop culture et relations compliquées avec ses parents issus de la haute société.",
    lieux: 3,
    musique: [3],
    anecdotes: [
      "La série est connue pour ses dialogues ultra rapides.",
      "Lorelai boit plus de café que n’importe quel humain normal."
    ],
    casting: [
      { actor: "Lauren Graham", character: "Lorelai Gilmore", ageAtStart: 33 },
      { actor: "Alexis Bledel", character: "Rory Gilmore", ageAtStart: 19 }
    ],
    image: "/images/gilmore-girls.jpg"
  },
  {
    id: 4,
    title: "Desperate Housewives",
    originalTitle: "Desperate Housewives",
    years: "2004 – 2012",
    synopsis:
      "Bienvenue à Wisteria Lane, où derrière chaque haie bien taillée se cachent secrets, meurtres et maris infidèles. Quatre femmes, quatre vies pas si parfaites.",
    lieux: 4,
    musique: [4],
    anecdotes: [
      "La rue Wisteria Lane est un décor réutilisé dans plusieurs séries.",
      "Le personnage de Mary Alice Young est mort dès l’épisode 1."
    ],
    casting: [
      { actor: "Teri Hatcher", character: "Susan Mayer", ageAtStart: 39 },
      { actor: "Felicity Huffman", character: "Lynette Scavo", ageAtStart: 42 },
      { actor: "Eva Longoria", character: "Gabrielle Solis", ageAtStart: 29 }
    ],
    image: "/images/desperates-housewives.jpg"
  },
  {
    id: 5,
    title: "Gossip Girl",
    originalTitle: "Gossip Girl",
    years: "2007 – 2012",
    synopsis:
      "Sur l’Upper East Side, un blog anonyme révèle les secrets croustillants d’adolescents privilégiés. Blair, Serena, Chuck… et une voix off inoubliable : 'XOXO, Gossip Girl'.",
    lieux: 5,
    musique: [5],
    anecdotes: [
      "La série a lancé la mode des blogs anonymes dans les années 2000.",
      "Le reboot a vu le jour en 2021, mais n’a pas eu le même succès."
    ],
    casting: [
      { actor: "Leighton Meester", character: "Blair Waldorf", ageAtStart: 21 },
      { actor: "Blake Lively", character: "Serena van der Woodsen", ageAtStart: 20 }
    ],
    image: "/images/gossip-girl.webp"
  },
  {
    id: 6,
    title: "Grey's Anatomy",
    originalTitle: "Grey's Anatomy",
    years: "2005 – (en cours)",
    synopsis:
      "Meredith Grey, interne en chirurgie, découvre l’envers de l’hôpital, entre opérations d’urgence et drames amoureux. Une série culte devenue phénomène mondial.",
    lieux: 6,
    musique: [],
    anecdotes: [
      "Le nom de la série est un clin d’œil à un célèbre manuel médical.",
      "Plus de 400 épisodes diffusés à ce jour."
    ],
    casting: [
      { actor: "Ellen Pompeo", character: "Meredith Grey", ageAtStart: 36 },
      { actor: "Sandra Oh", character: "Cristina Yang", ageAtStart: 34 }
    ],
    image: "/images/greys-anatomy.png"
  },
  {
    id: 7,
    title: "Private Practice",
    originalTitle: "Private Practice",
    years: "2007 – 2013",
    synopsis:
      "Spin-off de Grey’s Anatomy, cette série suit Addison Montgomery dans sa nouvelle vie au sein d’un cabinet médical privé à Los Angeles. Une ambiance plus intime et psychologique.",
    lieux: 7,
    musique: [6],
    anecdotes: [
      "La série a permis d’explorer des sujets plus sombres que dans Grey’s Anatomy.",
      "Addison était l’un des personnages préférés des fans."
    ],
    casting: [
      { actor: "Kate Walsh", character: "Addison Montgomery", ageAtStart: 40 },
      { actor: "Taye Diggs", character: "Sam Bennett", ageAtStart: 36 }
    ],
    image: "/images/private-practice.jpg"
  },
  {
    id: 8,
    title: "This Is Us",
    originalTitle: "This Is Us",
    years: "2016 – 2022",
    synopsis:
      "La famille Pearson à travers les décennies, entre drames, souvenirs et instants suspendus. Une série bouleversante sur la mémoire, l’amour, la perte et la filiation.",
    lieux: 8,
    musique: [7],
    anecdotes: [
      "Chaque épisode se déroule sur plusieurs temporalités.",
      "La série a été acclamée pour sa narration émotive."
    ],
    casting: [
      { actor: "Milo Ventimiglia", character: "Jack Pearson", ageAtStart: 39 },
      { actor: "Mandy Moore", character: "Rebecca Pearson", ageAtStart: 32 }
    ],
    image: "/images/this-is-us.jpg"
  }
];