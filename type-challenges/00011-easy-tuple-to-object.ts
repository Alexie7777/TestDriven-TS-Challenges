// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// ============= Your Code Here =============
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

// JavaScript implementation
function tupleToObject(array) {
  const obj = {};

  for (let key in array) {
    obj[key] = key;
  }

  return obj;
}
