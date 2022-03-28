export default class Compile {
  constructor(el, vue) {
    //vue实例
    this.$vue = vue;
    //挂载点
    this.$el = document.querySelector(el);
    if (this.$el) {
      // 调用函数，让节点变为fragment,类似于mustache中的tokens.实际上用的是Ast,这里就是轻量级的，fragment
      let $fragment = this.node2Fragment(this.$el);
      //编译
      this.Compile($fragment);
    }
  }
  node2Fragment(el) {
    var fragment = document.createDocumentFragment();
    var child;
    //让所有dom节点，都进入fragment
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }

    return fragment;
  }
  Compile(el) {
    //得到子元素
    var childNodes = el.childNodes;
    var self = this;
    childNodes.forEach(node => {
      if (node.nodeType == 1) {
        //1代表元素节点，也就是标签
        self.CompileElement(node);
      } else if (node.nodeType == 3) {
        let text = node.textContent;
      }
    });
  }
  CompileElement(node) {
    // console.log(node);
    //这里的方便之处，在于不是将HTML结构看做字符串，而是正真的属性列表
    var nodeAttrs = node.attributes; //获取元素节点属性列表
    //类数组对象变为数组
    Array.prototype.slice.call(nodeAttrs).forEach(attr => {
      //到时候去查一下为什么可以转变为数组
      //这里就分析指令
      var attrName = attr.name;
      var value = attr.value;
      //指令都是v-开头的
      var dir = attrName.substring(2); //只要下标为2开始往后的字符串
      if (attrName.indexOf("v-") == 0) {
        //看看是不是 v-指令
        if (dir == "model") {
          console.log("发现了model指令");
        } else if (dir == "for") {
          console.log("发现了for指令");
        }
      }
    });
  }
  CompileText() {}
}
