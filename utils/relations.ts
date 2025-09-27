import { series, Serie } from '../app/data/series';
import { lieux, Lieu } from '../app/data/lieux';
import { musiques, Artiste } from '../app/data/musiques';

export function getSeriesForLocation(locationId: number): Serie[] {
  return series.filter(serie => serie.lieux === locationId);
}

export function getSeriesForArtist(artistId: number): Serie[] {
  return series.filter(serie => serie.musique.includes(artistId));
}

export function getLocationForSeries(serieId: number): Lieu | undefined {
  const serie = series.find(s => s.id === serieId);
  if (!serie) return undefined;

  return lieux.find(lieu => lieu.id === serie.lieux);
}

export function getArtistsForSeries(serieId: number): Artiste[] {
  const serie = series.find(s => s.id === serieId);
  if (!serie) return [];

  return musiques.filter(artiste => serie.musique.includes(artiste.id));
}