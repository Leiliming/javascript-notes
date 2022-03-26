const obj = {
  [Symbol(1)]: "Symbol value",
  foo: "normal value",
  age: 19,
};

console.log(Object.getOwnPropertySymbols(obj));
