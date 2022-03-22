export class Node {
  constructor(element) {
    // 保存元素
    this.element = element;
    // 指向下一个节点
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    //火车头
    this.head = null;
    //长度
    this.length = 0;
  }
  //  append(element) 向链表尾部添加一个新的项。
  append(element) {
    //1.根据element 创建Node 对象
    const newNode = new Node(element);
    //2.追加到最后,两种情况 ：第一种是链表为空的时候
    if (!this.head) {
      // 当head指向null时候，让head直接等于element
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        //如果current.next指向了链表的下一项，就当前不是链表的最后一项，此时的current.next为true

        //将current.next赋值给current，使下次循环的时候，while判断current.next的next是否为空
        current = current.next;
      }
      //上面的while循环，一直循环，直到检查到current.next为空，说明当前这项就是链表最后一个了，此时将newNode赋值给最后一项的next
      current.next = newNode;
    }
    this.length++;
  }
  //  insert(position, element) 向链表的特定位置插入一个新的项。
  insert(position, element) {
    //1. 判断越界问题
    if (position < 0 || position > this.length) return false;

    //2. 创建新的节点
    const newNode = new Node(element);

    //3. 插入元素
    if (position === 0) {
      newNode.next = this.head; //newNode成为头部，同时next指向原来的head
      this.head = newNode; //直接将原来的head覆盖，但由于newNode.next指向原来的head，所以newNode成为head，原来的head顺利成章的成为第二位
    } else {
      let index = 0;
      let current = this.head; //循环的当前项
      let previous = null; //循环时，当前项的前一项
      while (index++ < position) {
        //注意：index++返回值为当前index值
        /*当index === position时，循环停止
                此时element插入链表后的previous的index === position - 1
                此时current的index === position + 1
                */
        previous = current;
        current = current.next;
      }
      //循环停止后，index === position,同时为current的index
      //进行插入：
      previous.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true; //告诉使用者插入成功
  }
  //  get(position) 获取对应位置的元素。
  get(position) {
    //1. 判断越界问题
    if (position < 0 || position > this.length - 1) return false;
    /*
        为什么是length - 1 ?
        假如：当前length是5, 组成链表的项目下标就为 0 1 2 3 4
        如果不减 1 那么 当position也是 5 时候 , 也判断符合要求，但是，我们的链表中却没有 下标为5的项，所以会返回为null
        */
    let index = 0;
    let current = this.head;
    //方法一：
    while (index++ < position) {
      //如果position 是 3，每次循环index + 1, 第三次循环index的值执行 “++” 后为3
      /*
            如果此时为第一次循环:
            current还是未循环时的值this.head,下标为 0
            同时 “1” 代表着第一次循环，也代表着 下标 1 
            下标 1 对应的值为此时的 current.next 
            */
      current = current.next;
      //未循环时 current为第0项
      //循环1次  current为第1项
      //循环2次  current为第2项
      //循环3次  current为第3项
    }
    //方法二：
    /* while (current) {
                if (index === position) {
                    return current
                }
                index++
                current = current.next
            }*/
    return current;
  }
  //  indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  //  removeAt(position) 从链表的特定位置移除一项。
  removeAt(position) {
    //1. 判断越界问题
    if (position < 0 || position > this.length - 1) return false;

    //2.删除元素
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let index = 0;
      let previous = null;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }
  //  update(position, element) 修改某个位置的元素。
  update(position, element) {
    //1.删除position位置的元素
    const result = this.removeAt(position);
    //2.将element插入position位置
    this.insert(position, element);
    return result;
  }
  //  remove(element) 从链表中移除一项。
  remove(element) {
    //1.获取元素位置
    const index = this.indexOf(element);
    if (index === -1) return;
    //2.删除该位置的元素
    return this.removeAt(index);
  }
  //  isEmpty() 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
  isEmpty() {
    return this.length === 0;
  }
  //  size() 返回链表包含的元素个数，与数组的 length 属性类似。
  size() {
    return this.length;
  }
}

module.exports = {
  Node,
  LinkedList,
};

// const linked = new LinkedList();
// linked.append("aaa");
// linked.append("bbb");
// linked.append("ccc");
// linked.append("ddd");

// console.log(linked.get(1))

// console.log(linked.update(3, 'abc'))
// console.log(linked.remove("aaa"));
// console.log(linked);
