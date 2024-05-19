import type {
  BasicColors,
  BasicSpacings,
  BasicTimings,
  ColorPalette,
  ComponentPalettes,
  FontFamily,
  SpacingBasis,
  SpacingPalette,
  TimingPalette,
} from "./theme.d";

// SPACING BASIS

const SPACING_BASIS = "10px" as const satisfies SpacingBasis;

// MEDIA BREAKPOINTS

const MEDIA_BREAKPOINTS = {
  mobileSmall: 320,
  mobile: 480,
  tablet: 768,
  desktop: 992,
  desktopWide: 1200,
} as const satisfies Record<string, number>;

// BASIC PALLETTES

const COLOR_PALETTE = {
  primary: "#FFA500",
  secondary: "#e81ee8",
  tertiary: "#0000ff",
  alert: "#ff0000",
  white: "#ffffff",
  black: "#000000",
  gray: "#808080",
  lightGray: "#f0f0f0",
} as const satisfies ColorPalette<BasicColors>;

// These will be converted to `${value}rem` in the theme object
const SPACING_PALETTE = {
  xxxs: "0.1rem",
  xxs: "0.25rem",
  xs: "0.5rem",
  s: "1rem",
  m: "1.5rem",
  l: "2rem",
  xl: "2.5rem",
  xxl: "3rem",
  xxxl: "3.5rem",
} as const satisfies SpacingPalette<BasicSpacings>;

// These will be converted to `${value}s` in the theme object
const TIMING_PALETTE = {
  extraFast: "0.25s",
  fast: "0.5s",
  medium: "1s",
  slow: "2s",
  extraSlow: "4s",
} as const satisfies TimingPalette<BasicTimings>;

const FONT_PALETTE = {
  heading: "futura-pt, sans-serif",
  body: "nimbus-sans, sans-serif",
} as const satisfies Record<string, FontFamily>;

// CUSTOM PALETTES
// Use these to store named palette value, or computed values combining basic
// palette values and/or other numeric calculations (for numerical palettes).

const CUSTOM_COLOR_PALETTE = {
  Button: {
    hoverColor: COLOR_PALETTE.primary,
  },
  Link: {
    hoverColor: COLOR_PALETTE.primary,
  },
} as const satisfies ComponentPalettes<ColorPalette>;

const CUSTOM_TIMING_PALETTE = {
  PageHeader: {
    shrinkTransition: TIMING_PALETTE.medium,
  },
  Button: {
    transitionSpeed: TIMING_PALETTE.extraFast,
  },
  Link: {
    transitionSpeed: TIMING_PALETTE.extraFast,
  },
} as const satisfies ComponentPalettes<TimingPalette>;

const CUSTOM_SPACING_PALETTE = {
  PageHeader: {
    titleFontSize: SPACING_PALETTE.xxxl,
    titlePadding: SPACING_PALETTE.s,
    logoHeight: "25rem",
    maxWidth: "95rem",
  },
  PageTemplate: {
    maxWidth: "95rem",
  },
  Footer: {
    emblemHeight: "10rem",
    height: "50rem",
    paddingTop: "10rem",
  },
  HeaderSubNavBar: {
    gap: SPACING_PALETTE.s,
    paddingTop: SPACING_PALETTE.s,
  },
  SubNavLink: {
    height: "4rem",
  },
  LocationBanner: {
    titleLineHeight: "12rem",
  },
} as const satisfies ComponentPalettes<SpacingPalette>;

// THEME

const theme = {
  colors: COLOR_PALETTE,
  _colors: CUSTOM_COLOR_PALETTE,
  spacings: SPACING_PALETTE,
  _spacings: CUSTOM_SPACING_PALETTE,
  timings: TIMING_PALETTE,
  _timings: CUSTOM_TIMING_PALETTE,
  fonts: FONT_PALETTE,
  spacingBasis: SPACING_BASIS,
  breakpoints: MEDIA_BREAKPOINTS,
};

// TYPES

// type for entire theme
export type Theme = typeof theme;

export default theme;
