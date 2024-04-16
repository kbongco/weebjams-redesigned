export interface Anime {
  airing: boolean;
  approved: boolean;
  background: string;
  broadcast: Broadcast;
  duration: string;
  episodes: number;
  demographics: Demographics[];
  explicit_genres: string[];
  favorites: number;
  genres: Genres[];
  images: Images;
  licensors: Licensors[];
  mal_id: number;
  members: number;
  popularity: number;
  producers: Producers[];
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string;
  source: string;
  status: string;
  studios: Studios[];
  synopsis: string;
  themes: Themes[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  titles: Titles[];
  trailer: Trailer[];
  type: string;
  url: string;
  year: number;
}

export interface Demographics {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface Broadcast {
  day: string;
  string: string;
  time: string;
  timezone: string;
}

export interface Genres {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface Images {
  jpg?: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}

export interface Webp {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}

export interface Licensors {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface Producers {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface Studios {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface Themes {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface Titles {
  type: string;
  title: string;
}

export interface Trailer {
  embed_url: string;
  images: TrailerImages;
  url: string;
  youtube_id: string;
}

export interface TrailerImages {
  image_url: string;
  large_image_url: string;
  maximum_image_url: string;
  medium_image_url: string;
  small_image_url: string;
}
