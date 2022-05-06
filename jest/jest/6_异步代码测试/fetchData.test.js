import { fetchData, fetchData1 } from "./fetchData";

test("fetchData", done => {
  fetchData(data => {
    expect(data).toEqual({ success: true });
    done(); //此时测试才结束
  });
});

// test("fetchData1", () => {
//   return fetchData1().then(Response => {
//     expect(Response.data).toEqual({ success: true });
//   });
// });

// test("fetchData1", () => {
//   expect.assertions(1); //要求下面代码必须跑一次expect
//   fetchData1().catch(reason => {
//     expect(reason.toString().indexOf("404") > -1).toBe(true);
//   });
// });
