let obj = {
  a: 1,
  b: 2,
  c: 3
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  // console.log(keys)
  return keys.map((key) => obj[key]);
}

console.log(getValues(obj, ['a', 'b', 'c']))
// console.log(getValues(obj, ['e', 'f']))


//keyof T
interface Obj {
  a: number,
  b: string
}
let key: keyof Obj = 'b'
// let value: Obj['a'] = 1

// interface Obj {
//   a: string;
//   b: number;
//   c: boolean;
// }
// type ReadonlyObj = Readonly<Obj>

// type Arrayish = {
//   [n: number]: unknown
// }
// type A = keyof Arrayish
// const a: A = 1

// type Mapish = {
//   [k: string]: boolean
// }
// type M = keyof Mapish

// const m1: M = '1'
// const m2: M = 100

// interface Obj1 {
//   a: string;
//   b: number;
//   c: boolean;
// }
// type ReadonlyObj = Readonly<Obj1>

// type PartialObk = Partial<Obj1>

// type PickObj = Pick<Obj, 'a' | 'b'>
type Diff<T, U> = T extends U ? never : T;
type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>;
