// PALETTE HELPER FUNCTIONS

import type { Spacing, Timing } from "../_config/theme.d";

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
 * Convert a Timing value to milliseconds.
 * @param timing - Timing value to convert
 */
const timingToMs = (timing: Timing): number => {
  return parseFloat(timing) * 1000;
};

export { addThemeValues, timingToMs };
