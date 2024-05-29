// PALETTE HELPER FUNCTIONS
import { RuleSet } from "styled-components";
import { css } from "styled-components";

import theme, { Theme } from "config/theme";
import type { Spacing, Timing } from "config/theme.d";

// TYPE GUARDS

/**
 * Type guard for Spacing values.
 * @param value - Value to check
 */
const isSpacing = (value: any): value is Spacing => {
  return typeof value === "string" && value.endsWith("rem");
};

/**
 * Type guard for Timing values.
 * @param value - Value to check
 */
const isTiming = (value: any): value is Timing => {
  return typeof value === "string" && value.endsWith("s");
};

// TYPES

type MediaFeatureType = "min-width" | "max-width";

/**
 * Add Spacing or Timing values together with numeric
 * values together and return a new Spacing or Timing value, respectively.
 *
 * @param values - Spacing or Timing values, in addition to numbers
 */
function addThemeValues(...values: (Spacing | number)[]): Spacing;
function addThemeValues(...values: (Timing | number)[]): Timing;
function addThemeValues(...values: any[]): any {
  // For adding spacing values
  if (values.some((val) => isSpacing(val))) {
    const sum = values.map(parseFloat).reduce((acc, val) => acc + val, 0);
    return `${sum}rem` as Spacing;
  }

  // For adding timing values
  if (values.some((val) => isTiming(val))) {
    const sum = values.map(parseFloat).reduce((acc, val) => acc + val, 0);
    return `${sum}s` as Timing;
  }
}

/**
 * Generate a media query string generator based on a breakpoint and CSS.
 *
 * @param breakpoint - Name of breakpoint to use.
 * @param type - Type of media feature to use.
 * @returns - Function that takes CSS and returns a media query string.
 */
const generateMediaQuery = (
  breakpoint: keyof Theme["breakpoints"],
  type: MediaFeatureType = "max-width",
) => {
  /**
   * Function that takes `styled-components` CSS and returns a media
   * query wrapped around it.
   */
  return (block: RuleSet<object>) => {
    const blockCss = [...block].join("");
    const wrapped = `@media (${type}: ${theme.breakpoints[breakpoint]}px) { ${blockCss} }`;
    return css`
      ${wrapped}
    `;
  };
};

/**
 * Hook to check if the window matches a breakpoint.
 * @param breakpoint - Name of breakpoint to use.
 * @param type - Type of media feature to use.
 */
const useBreakpoint = (
  breakpoint: keyof Theme["breakpoints"],
  type: MediaFeatureType = "max-width",
) => {
  return window.matchMedia(`(${type}: ${breakpoint}px)`).matches;
};

/**
 * Convert a Timing value to milliseconds.
 * @param timing - Timing value to convert
 */
const timingToMs = (timing: Timing): number => {
  return parseFloat(timing) * 1000;
};

export { addThemeValues, generateMediaQuery, timingToMs, useBreakpoint };
