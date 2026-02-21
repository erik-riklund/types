/**
 * Represents a value or a `Promise` resolving to that value.
 *
 * @since 0.1.0
 */
export type Awaitable<T> = T | Promise<T>;

/**
 * Represents a type that can be T or null, provided T is not undefined.
 *
 * @since 0.1.0
 */
export type Nullable<T> = T extends undefined ? never : T | null;

/**
 * Extracts the element type from an array.
 *
 * @since 0.1.0
 */
export type Unpack<T> = T extends Array<infer V> ? V : never;
