// TYPES

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavItemConfig {
  /**
   * The title of the navigation link.
   */
  title: string;

  /**
   * The URL of the navigation link.
   */
  href: string;

  /**
   * The Font Awesome icon for the navigation link.
   */
  icon: IconDefinition;

  /**
   * Whether the link is an external link.
   */
  externalLink?: boolean;

  /**
   * Configuration for the sub-navigation items.
   */
  subNavConfig?: SubNavItemConfig[];
}

export interface SubNavItemConfig {
  /**
   * The title of the navigation link, which can also be a JSX Element.
   */
  title: string | JSX.Element;

  /**
   * The URL of the navigation link.
   */
  href: string;

  /**
   * Whether the link is an external link.
   */
  externalLink?: boolean;
}
