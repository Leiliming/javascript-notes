test("toBe 匹配器", () => {
  const a = 1;
  expect(a).toBe(1);
});

test("toEqual 匹配器", () => {
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});
test("toBeNull 匹配器", () => {
  const a = null;
  expect(a).toBeNull();
});

test("toEqual 匹配器", () => {
  const a = null;
  expect(a).toBeNull();
});

test("toBeUndefined 匹配器", () => {
  const a = undefined;
  expect(a).toBeUndefined();
});

test("toBeDefined  匹配器", () => {
  const a = 2;
  //a是否被定义
  expect(a).toBeDefined();
});

test("toBeTruthy 匹配器", () => {
  const a = 1;
  //a是否为真
  expect(a).toBeTruthy();
});

test("toBeFalsy 匹配器", () => {
  const a = 0;
  //a是否为假
  expect(a).toBeFalsy();
});

test("not 匹配器", () => {
  const a = 1;
  //a是否不为假
  expect(a).not.toBeFalsy();
  expect(a).toBeTruthy();
});

test("toBeGreaterThan 数字匹配器", () => {
  const count = 10;
  //count 是否 大于 9
  expect(count).toBeGreaterThan(9);
});

test("toBeLessThan 数字匹配器", () => {
  const count = 10;
  //count 是否 小于 11
  expect(count).toBeLessThan(11);
});

test("toBeCloseTo 数字匹配器", () => {
  const firstNumber = 0.1;
  const secondNumber = 0.2;
  //count 是否无限接近 0.3 ，用于小数算数
  expect(firstNumber + secondNumber).toBeCloseTo(0.3);
});

test("toMatch 包含匹配器", () => {
  const str = "http://www.dell-lee.com";
  //str 是否包含 ...
  expect(str).toMatch(/.+\.com$/g);
});

test("toContain 包含匹配器", () => {
  const arr = ["dell", "lee", "imooc"];
  const data = new Set(arr);
  //arr 是否包含 ...
  expect(arr).toContain("dell");
  expect(data).toContain("dell");
});

//异常
const throwNewErrorFunc = () => {
  throw new Error("this is a new Error");
};
test("toThrow 匹配器", () => {
  //throwNewErrorFunc运行时是否抛出异常
  expect(throwNewErrorFunc).toThrow();
  expect(throwNewErrorFunc).toThrow("this is a new Error");
  expect(throwNewErrorFunc).toThrow(/this is a new Error/);
});
