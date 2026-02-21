import type { Awaitable, Nullable, Unpack } from "@riklund/types";

type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

export function assert<T extends true>() {}

// --- Type tests ---

assert<Equals<Awaitable<number>, number | Promise<number>>>();
assert<Equals<Nullable<string>, string | null>>();
assert<Equals<Unpack<Array<boolean>>, boolean>>();
