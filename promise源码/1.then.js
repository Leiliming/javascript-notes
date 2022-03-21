const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  //promise的状态
  status = PENDING;
  value = undefined;
  reason = undefined;
  //成功回调
  successCallback = [];
  failCallback = [];
  resolve = value => {
    //如果状态不是等待，阻止程序向下指向
    if (this.status !== PENDING) return;
    //将状态改为成功
    this.status = FULFILLED;
    //保存成功之后的值
    this.value = value;
    //判断成功回调是否存在，如果存在就直接调用
    // this.successCallback && this.successCallback(this.value = value)
    while (this.successCallback.length) this.successCallback.shift()(this.value);
  };
  reject = reason => {
    //如果状态不是等待，阻止程序向下指向
    if (this.status !== PENDING) return;
    //将状态改为失败
    this.status = REJECTED;
    //保存失败之后的原因
    this.reason = reason;
    //判断失败回调是否存在，如果存在就直接调用
    // this.failCallback && this.failCallback(this.reason = reason)
    while (this.failCallback.length) this.failCallback.shift()(this.reason);
  };
  then(successCallback, failCallback) {
    //判断状态
    if (this.status === FULFILLED) {
      successCallback(this.value);
    } else if (this.status === REJECTED) {
      failCallback(this.reason);
    } else {
      //等待状态
      this.successCallback.push(successCallback);
      this.failCallback.push(failCallback);
    }
  }
}
module.exports = MyPromise;
