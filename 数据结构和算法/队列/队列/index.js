class Queue {
    //封装属性
    constructor() {
        this.items = []
    }
    //尾部添加一个项
    enqueue (element) {
        this.items.push(element)
    }
    //移除队列的第一项，并返回被移除的元素
    dequeue () {
        return this.items.shift()
    }
    //查看一下第一个元素
    front () {
        if (this.items.length === 0) return null
        return this.items[0]
    }
    //队列是否为空
    isEmpty () {
        return this.items.length === 0
    }
    //返回队列长度
    size(){
        return this.items.length
    }
}
var pq = new PrioriryQueue()