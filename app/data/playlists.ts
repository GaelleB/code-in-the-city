import { chansonsEntendues } from './chansons-entendues';
import { musiques } from './musiques';

export type PlaylistMood = 'nostalgie' | 'mélancolie' | 'réconfort' | 'énergie' | 'nuit';

export interface Track {
  artistId?: number;
  serieId: number;
  songTitle: string;
  artistName: string;
  mood: PlaylistMood;
  year?: number;
}

export interface Playlist {
  id: number;
  title: string;
  mood: PlaylistMood;
  description: string;
  coverImage: string;
  tracks: Track[];
}

export const playlists: Playlist[] = [
  {
    id: 1,
    title: "Nostalgie 2000s",
    mood: "nostalgie",
    description: "Les chansons qui nous ont fait vibrer au début du millénaire. Entre télé-réalité musicale et séries teen, ces morceaux sont gravés dans notre mémoire collective.",
    coverImage: "/images/playlist-nostalgie.jpg",
    tracks: [
      {
        serieId: 1,
        songTitle: "I Don't Want to Wait",
        artistName: "Paula Cole",
        artistId: 1,
        mood: "nostalgie",
        year: 1998
      },
      {
        serieId: 2,
        songTitle: "I Don't Want to Be",
        artistName: "Gavin DeGraw",
        artistId: 2,
        mood: "nostalgie",
        year: 2003
      },
      {
        serieId: 3,
        songTitle: "Where You Lead",
        artistName: "Carole King & Louise Goffin",
        artistId: 3,
        mood: "nostalgie",
        year: 2000
      },
      {
        serieId: 3,
        songTitle: "There She Goes",
        artistName: "The La's",
        mood: "nostalgie",
        year: 2000
      },
      {
        serieId: 5,
        songTitle: "Young Folks",
        artistName: "Peter Bjorn and John",
        mood: "nostalgie",
        year: 2007
      },
      {
        serieId: 1,
        songTitle: "Kiss the Rain",
        artistName: "Billie Myers",
        mood: "nostalgie",
        year: 1998
      },
    ]
  },
  {
    id: 2,
    title: "Mélancolie d'automne",
    mood: "mélancolie",
    description: "Ces chansons qui font mal et qui font du bien en même temps. Pour les soirs de pluie, les fins de journée et les cœurs un peu cabossés.",
    coverImage: "/images/playlist-melancolie.jpg",
    tracks: [
      {
        serieId: 2,
        songTitle: "Winter",
        artistName: "Joshua Radin",
        mood: "mélancolie",
        year: 2006
      },
      {
        serieId: 6,
        songTitle: "How to Save a Life",
        artistName: "The Fray",
        mood: "mélancolie",
        year: 2005
      },
      {
        serieId: 6,
        songTitle: "Chasing Cars",
        artistName: "Snow Patrol",
        mood: "mélancolie",
        year: 2006
      },
      {
        serieId: 8,
        songTitle: "Death with Dignity",
        artistName: "Sufjan Stevens",
        mood: "mélancolie",
        year: 2015
      },
      {
        serieId: 8,
        songTitle: "Landslide",
        artistName: "Chrissy Metz",
        mood: "mélancolie",
        year: 2017
      },
      {
        serieId: 6,
        songTitle: "The Story",
        artistName: "Brandi Carlile",
        mood: "mélancolie",
        year: 2007
      },
      {
        serieId: 7,
        songTitle: "Breakable",
        artistName: "Ingrid Michaelson",
        mood: "mélancolie",
        year: 2008
      },
      {
        serieId: 1,
        songTitle: "As I Lay Me Down",
        artistName: "Sophie B. Hawkins",
        mood: "mélancolie",
        year: 1995
      },
    ]
  },
  {
    id: 3,
    title: "Réconfort",
    mood: "réconfort",
    description: "Les chansons-doudou, celles qui nous rappellent qu'on n'est pas seul·e. Pour les moments où on a besoin d'un câlin musical.",
    coverImage: "/images/playlist-reconfort.jpg",
    tracks: [
      {
        serieId: 2,
        songTitle: "Halo",
        artistName: "Bethany Joy Lenz",
        mood: "réconfort",
        year: 2005
      },
      {
        serieId: 6,
        songTitle: "Keep Breathing",
        artistName: "Ingrid Michaelson",
        mood: "réconfort",
        year: 2008
      },
      {
        serieId: 8,
        songTitle: "Somewhere Only We Know",
        artistName: "Keane",
        mood: "réconfort",
        year: 2004
      },
      {
        serieId: 4,
        songTitle: "Thank You",
        artistName: "Dido",
        mood: "réconfort",
        year: 2001
      },
      {
        serieId: 3,
        songTitle: "Reflecting Light",
        artistName: "Sam Phillips",
        mood: "réconfort",
        year: 2000
      },
      {
        serieId: 7,
        songTitle: "Closer to You",
        artistName: "Brandi Carlile",
        mood: "réconfort",
        year: 2009
      },
      {
        serieId: 6,
        songTitle: "Breathe (2AM)",
        artistName: "Anna Nalick",
        mood: "réconfort",
        year: 2004
      },
    ]
  },
  {
    id: 4,
    title: "Énergie positive",
    mood: "énergie",
    description: "Pour se remonter le moral, danser dans sa chambre ou affronter la journée avec un sourire. Les chansons qui donnent envie d'avancer.",
    coverImage: "/images/playlist-energie.jpg",
    tracks: [
      {
        serieId: 2,
        songTitle: "The Good Kind",
        artistName: "The Wreckers",
        mood: "énergie",
        year: 2006
      },
      {
        serieId: 5,
        songTitle: "You've Got the Love",
        artistName: "Florence + The Machine",
        mood: "énergie",
        year: 2009
      },
      {
        serieId: 4,
        songTitle: "Band of Gold",
        artistName: "Freda Payne",
        mood: "énergie",
        year: 1970
      },
      {
        serieId: 2,
        songTitle: "When It Comes",
        artistName: "Tyler Hilton",
        mood: "énergie",
        year: 2004
      },
      {
        serieId: 3,
        songTitle: "Then She Appeared",
        artistName: "XTC",
        mood: "énergie",
        year: 1989
      },
      {
        serieId: 2,
        songTitle: "Chariot",
        artistName: "Gavin DeGraw",
        artistId: 2,
        mood: "énergie",
        year: 2003
      },
    ]
  },
  {
    id: 5,
    title: "Nuits éveillées",
    mood: "nuit",
    description: "Ces chansons qu'on écoutait en boucle la nuit, dans notre lit, en pensant à quelqu'un ou à personne. L'insomnie des cœurs qui réfléchissent trop.",
    coverImage: "/images/playlist-nuit.jpg",
    tracks: [
      {
        serieId: 1,
        songTitle: "Ready for a Fall",
        artistName: "PJ Olsson",
        mood: "nuit",
        year: 2000
      },
      {
        serieId: 5,
        songTitle: "With Me",
        artistName: "Sum 41",
        mood: "nuit",
        year: 2007
      },
      {
        serieId: 8,
        songTitle: "We Can Always Come Back To This",
        artistName: "Brian Tyree Henry",
        mood: "nuit",
        year: 2018
      },
      {
        serieId: 7,
        songTitle: "Cry Baby",
        artistName: "Dukes of Daville",
        mood: "nuit",
        year: 2008
      },
      {
        serieId: 6,
        songTitle: "Breathe (2AM)",
        artistName: "Anna Nalick",
        mood: "nuit",
        year: 2004
      },
      {
        serieId: 2,
        songTitle: "Winter",
        artistName: "Joshua Radin",
        mood: "nuit",
        year: 2006
      },
      {
        serieId: 1,
        songTitle: "Kiss the Rain",
        artistName: "Billie Myers",
        mood: "nuit",
        year: 1998
      },
    ]
  },
];

// Fonction pour récupérer les playlists par mood
export function getPlaylistsByMood(mood: PlaylistMood): Playlist[] {
  return playlists.filter(playlist => playlist.mood === mood);
}

// Fonction pour récupérer les tracks d'une playlist
export function getTracksForPlaylist(playlistId: number): Track[] {
  const playlist = playlists.find(p => p.id === playlistId);
  return playlist ? playlist.tracks : [];
}

// Fonction pour récupérer toutes les playlists
export function getAllPlaylists(): Playlist[] {
  return playlists;
}

// Fonction pour récupérer une playlist par ID
export function getPlaylistById(playlistId: number): Playlist | undefined {
  return playlists.find(p => p.id === playlistId);
}

// Fonction pour récupérer toutes les tracks d'une série
export function getTracksForSerie(serieId: number): Track[] {
  const tracks: Track[] = [];
  playlists.forEach(playlist => {
    playlist.tracks.forEach(track => {
      if (track.serieId === serieId && !tracks.some(t => t.songTitle === track.songTitle && t.artistName === track.artistName)) {
        tracks.push(track);
      }
    });
  });
  return tracks;
}
