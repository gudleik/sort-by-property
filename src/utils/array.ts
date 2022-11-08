/**
 * Checks if the typeof `value` is `array`.
 */
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
