// TYPES

export interface TableRow {
  index: number;
}

export interface Image {
  src: string;
  title: string;
}

export interface Link {
  href: string;
  title: string;
  externalLink?: boolean;
}

export interface SocialMediaLinks {
  instagram?: Link;
  facebook?: Link;
  twitter?: Link;
  bandcamp?: Link;
}

export interface Location {
  street?: string;
  name: string;
  city: string;
  state: string;
  socialMediaLinks?: SocialMediaLinks;
}

export interface Band {
  name: string;
  locations?: Location[];
  genre?: string;
  blurb?: string;
  socialMediaLinks?: SocialMediaLinks;
}

export interface EventRow extends TableRow {
  index: number;
  location: Location;
  date: Date;
  narrowBannerImage: Image;
  socialMediaLinks: SocialMediaLinks;
  websiteLink?: Link;
  ticketCost?: string;
  ticketLink?: Link;
  lineup: Band[];
  eventPoster?: Image;
}
