export interface Spot {
    id: string;
    nom: string;
    mapUrl: string;
}

export interface Itineraire {
    serieId: number;
    spots: Spot[];
}

export const itineraires: Itineraire[] = [
    {
        serieId: 5, // Gossip Girl
        spots: [
        {
            id: "upper-east-side",
            nom: "Upper East Side (vues extérieures)",
            mapUrl: "https://www.google.com/maps/place/Upper+East+Side+NYC/",
        },
        {
            id: "met-museum",
            nom: "Metropolitan Museum of Art (l'école)",
            mapUrl: "https://www.google.com/maps/place/Metropolitan+Museum+of+Art/",
        },
        {
            id: "nate-house",
            nom: "Maison de Nate Archibald",
            mapUrl: "https://www.google.com/maps/place/Manhattan+Townhouse+Nate/",
        },
        {
            id: "blair-apartment",
            nom: "Appartement de Blair Waldorf",
            mapUrl: "https://www.google.com/maps/place/Blair+Waldorf+Apartment/",
        },
        {
            id: "chuck-hotel",
            nom: "Hôtel de Chuck Bass",
            mapUrl: "https://www.google.com/maps/place/Library+Hotel+NYC/",
        },
        {
            id: "serena-hotel",
            nom: "Hôtel de Serena van der Woodsen",
            mapUrl: "https://www.google.com/maps/place/The+Mark+Hotel+NYC/",
        },
        {
            id: "dan-apartment",
            nom: "Appartement de Dan Humphrey",
            mapUrl: "https://www.google.com/maps/place/Gotham+West+Market+Apartments/",
        },
        ],
    },
  // … autres seriesId 
];