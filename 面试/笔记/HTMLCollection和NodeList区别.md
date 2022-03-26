# Node和ELement区别
- DOM是一棵树，所有节点都是Node
- Node是Element的基类
- Element是其他HTML元素的基类，如HTMLDivElement

![image-20220326153038325](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220326153038325.png)

- HTMLCollection 是Element的集合

- NodeList是Node的集合

- 获取Node和Element的返回结果可能不一样
- 如elem.childNodes和elem.children不一样
- 前者会包含Text和Comment节点，后者不会
