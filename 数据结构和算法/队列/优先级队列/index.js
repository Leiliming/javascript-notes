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
        if (this.isEmpty()) return null
        return this.items[0]
    }
    //队列是否为空
    isEmpty () {
        return this.items.length === 0
    }
    //返回队列长度
    size () {
        return this.items.length
    }
}
class QueueElement {//创建优先级队列
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}
class PriorityQueue extends Queue {//优先级队列继承一些队列方法，只是插入的时候多一个优先级的数量
    enqueue (element, priority) {
        //1.创建QueueElement对象
        const queueElement = new QueueElement(element, priority)

        //2.考虑如何插入新的元素
        if (this.isEmpty()) {
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].priority > queueElement.priority) {
                    //数量越大，优先级越低，如果queueElement.priority小于当前项，那么直接插入当前位置
                    this.items.splice(i, 0, queueElement)//i 插入的位置，0不删除，queueElement插入的元素
                    added = true
                    break //从小到大开始循环，所以当queueElement找到了比他大的项，说明后面的更大了，也没有必要循环下去了，所以停止循环
                }
            }
            if (!added) {//说明queueElement.priority 大于当前队列所有项的priority，所以直接插入到队列最后
                this.items.push(queueElement)
            }
        }
    }
}

const queue = new PriorityQueue()
queue.enqueue('aaa', 100)
queue.enqueue('bbb', 150)
queue.enqueue('ccc', 120)
queue.enqueue('ddd', 90)

queue.items.forEach(item => {
    console.log(item.element, item.priority)
})
console.log(queue.items)