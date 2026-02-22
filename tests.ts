import type { Awaitable, Nullable, Unpack } from "./types.ts";

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

function assert<T extends true>() {}

// --- Type tests ---

assert<Equal<Awaitable<number>, number | Promise<number>>>();
assert<Equal<Nullable<string>, string | null>>();
assert<Equal<Unpack<Array<boolean>>, boolean>>();
