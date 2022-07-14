// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">,
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

function myPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in obj) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历keys
// 3. 检查key是否存在obj中
// 4. 将todo[key]放入obj中
