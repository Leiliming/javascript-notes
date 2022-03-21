const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {

    constructor(executor) {
        try {
            executor(this.resolve, this.reject)

        } catch (e) {
            this.reject(e)
        }
    }
    // promsie 状态 
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败后的原因
    reason = undefined;
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];
    resolve = value => {
        //如果状态不是等待，阻止程序向下指向
        if (this.status !== PENDING) return
        //将状态改为成功
        this.status = FULFILLED
        //保存成功之后的值
        this.value = value
        //判断成功回调是否存在，如果存在就直接调用
        // this.successCallback && this.successCallback(this.value = value)
        while (this.successCallback.length) this.successCallback.shift()()
    }
    reject = reason => {
        //如果状态不是等待，阻止程序向下指向
        if (this.status !== PENDING) return
        //将状态改为失败
        this.status = REJECTED
        //保存失败之后的原因
        this.reason = reason
        //判断失败回调是否存在，如果存在就直接调用

        // this.failCallback && this.failCallback(this.reason = reason)
        while (this.failCallback.length) this.failCallback.shift()()
    }
    then(successCallback, failCallback) {
        // 参数可选
        successCallback = successCallback ? successCallback : value => value;
        // 参数可选
        failCallback = failCallback ? failCallback : reason => { throw reason };
        let promise2 = new MyPromise((resolve, reject) => {
            //判断状态
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = successCallback(this.value);
                        // 判断 x 的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve 
                        // 如果是promise对象 查看promsie对象返回的结果 
                        // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                        //把错误信息传递给下一个Promise的回调函数
                    } catch (error) {
                        reject(error)

                    }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason)
                        // 判断 x 的值是普通值还是promise对象
                        // 如果是普通值 直接调用resolve 
                        // 如果是promise对象 查看promsie对象返回的结果 
                        // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                        resolvePromise(promise2, x, resolve, reject)
                        //把错误信息传递给下一个Promise的回调函数
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else {
                //等待状态
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value);
                            // 判断 x 的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve 
                            // 如果是promise对象 查看promsie对象返回的结果 
                            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                            //把错误信息传递给下一个Promise的回调函数
                        } catch (error) {
                            reject(error)

                        }
                    }, 0)
                })
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason)
                            // 判断 x 的值是普通值还是promise对象
                            // 如果是普通值 直接调用resolve 
                            // 如果是promise对象 查看promsie对象返回的结果 
                            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                            resolvePromise(promise2, x, resolve, reject)
                            //把错误信息传递给下一个Promise的回调函数
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                })
            }
        })
        return promise2
    }
    static all(array) {
        let result = []
        let index = 0
        return new MyPromise((resolve, reject) => {
            function addData(key, value) {
                result[key] = value
                index++
                if (index == array.length) {
                    resolve(result)
                }
            }
            for (let i = 0; i < array.length; i++) {
                let current = array[i]
                if (current instanceof MyPromise) {
                    //promise对象
                    current.then(value => addData(i, value), reason => reject(reason))
                } else {
                    //普通值 
                    addData(i, array[i])
                }
            }
        })
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    //X 是 自己创建的的Promise
    //resolve,reject是构造函数中then方法返回的Promise的参数
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if (x instanceof MyPromise) {


        // promise 对象
        x.then(value => {
            resolve(value)
        }, reason => {
            reject(reason)
        })
        // x.then(resolve, reject);

    } else {
        // 普通值
        resolve(x)
    }
}
// module.exports = MyPromise
