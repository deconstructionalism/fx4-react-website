// TYPES

interface FeatureFlag {
  description: string;
  active: boolean;
}

export interface TableRow {
  index: number;
}

export interface ImageData {
  src: string;
  title: string;
}

export interface LinkData {
  href: string;
  title?: string;
  externalLink?: boolean;
}

export interface SocialMediaLinkData {
  instagram?: LinkData;
  facebook?: LinkData;
  twitter?: LinkData;
  bandcamp?: LinkData;
  youtube?: LinkData;
}

export interface LocationData {
  street?: string;
  name: string;
  city: string;
  state: string;
  socialMediaLinks?: SocialMediaLinkData;
  website?: LinkData;
}

export interface BandData {
  name: string;
  locations?: LocationData[];
  genre?: string;
  blurb?: string;
  socialMediaLinks?: SocialMediaLinkData;
  website?: LinkData;
}

export interface EventLinkData {
  websiteLink?: LinkData;
  merchandiseLink?: LinkData;
  donationLink?: LinkData;
  ticketLink?: LinkData;
}

export interface EventRow extends TableRow {
  index: number;
  location: LocationData;
  date: Date;
  narrowBannerImage: ImageData;
  socialMediaLinks: SocialMediaLinkData;
  eventLinks: EventLinkData;
  ticketCost?: string;
  lineup: BandData[];
  eventPoster?: ImageData;
  announcement?: string;
}
