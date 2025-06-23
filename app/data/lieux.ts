// app/data/lieux.ts
export interface Lieu {
  id: number;
  nom: string;
  description: string;
  mapUrl: string;
}

export const lieux: Lieu[] = [
  {
    id: 1,
    nom: "Dawson’s Creek – Capeside Pier",
    description: "Le célèbre ponton de Dawson’s Creek, tourné à Southport.",
    mapUrl: "https://www.google.com/maps/place/Southport+Pier"
  },
  {
    id: 2,
    nom: "Les Frères Scott – Wilmington",
    description: "Screen Gems Studios et la 6th Street Bridge à Wilmington.",
    mapUrl: "https://www.google.com/maps/search/Wilmington+NC+Screen+Gems+Studios"
  },
  {
    id: 3,
    nom: "Gilmore Girls – Stars Hollow (Union Station)",
    description: "Union Station à Washington D.C., stand-in de Stars Hollow.",
    mapUrl: "https://www.google.com/maps/search/Washington+DC+Union+Station"
  },
  {
    id: 4,
    nom: "Desperate Housewives – Wisteria Lane",
    description: "Le backlot Universal Studios à Los Angeles.",
    mapUrl: "https://www.google.com/maps/search/Universal+Studios+Backlot+Los+Angeles"
  },
  {
    id: 5,
    nom: "Gossip Girl – Upper East Side",
    description: "Métropolitan Museum, Waldorf-Astoria, St. Regis…",
    mapUrl: "https://www.google.com/maps/place/Upper+East+Side+NYC"
  },
  {
    id: 6,
    nom: "Grey’s Anatomy – Harborview Medical Center",
    description: "L’hôpital de Seattle qui joue les décors de Grey’s Anatomy.",
    mapUrl: "https://www.google.com/maps/place/Harborview+Medical+Center"
  },
  {
    id: 7,
    nom: "Private Practice – Los Angeles",
    description: "Le cabinet d’Addison check-up au cœur de L.A.",
    mapUrl: "https://www.google.com/maps/search/Los+Angeles+CA"
  },
  {
    id: 8,
    nom: "This Is Us – Pittsburgh & Los Angeles",
    description: "Les quartiers de Pittsburgh pour la famille Pearson.",
    mapUrl: "https://www.google.com/maps/search/Pittsburgh+PA"
  },
];