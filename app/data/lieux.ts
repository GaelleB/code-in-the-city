export type Lieu = {
    id: number;
    nom: string;
    description: string;
};

export const lieux: Lieu[] = [
    {
        id: 1,
        nom: "Wilmington (Caroline du Nord)",
        description:
        "Ville emblématique de tournage pour Dawson et Les Frères Scott, avec le Rivercourt, le pont de Lucas, et les studios Screen Gems."
    },
    {
        id: 2,
        nom: "Seattle (fictif)",
        description:
        "Grey's Anatomy est censée se dérouler à Seattle, mais les scènes extérieures sont tournées à Los Angeles."
    },
    {
        id: 3,
        nom: "Los Angeles",
        description:
        "Lieu de tournage de nombreuses séries, dont Grey's Anatomy, pour les extérieurs d’hôpital et de ville."
    }
];