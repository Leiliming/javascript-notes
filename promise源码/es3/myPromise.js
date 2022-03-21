var PADDING = 'padding'
var FULFILLED = 'fulfilled'
var REJECTED = 'rejected'

function MyPromise(executor) {
    this.PromiseStatus = PADDING
    this.PromiseResult = undefined
    var self = this


    function resolve(value) {
        if (self.PromiseStatus !== PADDING) return
        //改变Promise状态
        self.PromiseStatus = FULFILLED
        //保存Promise成功数据
        self.PromiseResult = value
    }

    function reject(reason) {
        if (self.PromiseStatus !== PADDING) return
        //改变Promise状态
        self.PromiseStatus = REJECTED
        //保存Promise失败原因
        self.PromiseResult = reason
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
MyPromise.prototype.then = function (successCallback, failCallback) {
    if (this.PromiseStatus === FULFILLED) {
        successCallback(this.PromiseResult)
    } else if (this.PromiseStatus === REJECTED) {
        failCallback(this.PromiseResult)
    }
}