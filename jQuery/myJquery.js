(function () {
  function jQuery(selector) {
    return new jQuery.prototype.init(selector);
  }
  jQuery.prototype.init = function (selector) {
    //选出 dom 并且包装 jQuery对象 返回
    // id class
    this.length = 0;
    //null undefined dom
    if (selector == null) {
      return this;
    }
    if (typeof selector === "string" && selector.indexOf(".") != -1) {
      var dom = document.getElementsByClassName(selector.slice(1));
    } else if (typeof selector === "string" && selector.indexOf("#") != -1) {
      var dom = document.getElementById(selector.slice(1));
    }

    // if (selector instanceof Element) {
    //   this[0] = selector;
    //   this.length++;
    // }
    if (selector instanceof Element || dom.length == undefined) {
      this[0] = dom || selector;
      this.length++;
    } else {
      //基础铺垫
      for (var i = 0; i < dom.length; i++) {
        this[i] = dom[i];
        this.length++;
      }
    }
  };
  jQuery.prototype.css = function (config) {
    for (var i = 0; i < this.length; i++) {
      for (var attr in config) {
        this[i].style[attr] = config[attr];
      }
    }
    //链式操作
    return this;
  };
  jQuery.prototype.get = function (num) {
    if (num == null) {
      //return Array.prototype.slice.call(this, 0);
      return [].slice.call(this, 0);
    } else {
      if (num >= 0) {
        return this[num];
      } else {
        return this[num + this.length];
      }
    }
  };
  jQuery.prototype.eq = function (num) {
    var dom = num;
    if (num !== null) {
      if (num >= 0) {
        dom = this[num];
      } else {
        dom = this[num + this.length];
      }
    } else {
      dom = null;
    }
    jQuery.prototype.add = function (selector) {
      var curObj = jQuery(selector);
      var baseObj = this;
      var newObj = jQuery();
      for (var i = 0; i < curObj.length; i++) {
        newObj[this.length++] = curObj[i];
      }
      for (var i = 0; i < curObj.length; i++) {
        newObj[this.length++] = curObj[i];
      }
      return newObj;
    };
    return jQuery(dom);
  };
  jQuery.prototype.init.prototype = jQuery.prototype;
  window.$ = window.jQuery = jQuery;
})();
