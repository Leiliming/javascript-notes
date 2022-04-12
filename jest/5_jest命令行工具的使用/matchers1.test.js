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
