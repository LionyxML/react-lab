/**
 * Generates a Promise to be solved after X miliseconds. A simple delay function.
 * @param millis - time in milliseconds
 * @returns nothing
 *
 * @example
 * ```ts
 *  delay(1000);  // 1 second delay
 *  delay(2000);  // 2 seconds delay
 * ```
 */
export const miliSecondsDelay = (millis: number): Promise<void> =>
  new Promise<void>((resolve): void => {
    setTimeout(() => resolve(), millis);
  });
