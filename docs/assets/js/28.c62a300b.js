(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{289:function(t,e,n){"use strict";n.r(e);var a=n(38),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),n("p",[t._v("随着互联网发展速度放缓，企业招聘时更挑人，所以越来越多的公司，喜欢在面试中考察算法，特别是在二面的时候，所以算法一定得有所准备。")]),t._v(" "),n("h2",{attrs:{id:"实现bind"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现bind","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现bind")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function deepClone（obj）{\n  if (obj === null | typeof obj !== 'object') return obj;\n  if (obj instanceof Date) return new Date(obj);\n  if (obj instanceof RegExp) return new Date(RegExp);\n  const newObj = new obj.constuctor;\n  for (let key in obj) {\n    if(obj.hasOwnProperty(key)) {\n      newObj[key] = deepClone(obj[key]);\n    }\n  }\n\n  return newObj;\n}\n")])])]),n("h2",{attrs:{id:"实现深拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现深拷贝","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现深拷贝")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function deepClone（obj）{\n  if (obj === null | typeof obj !== 'object') return obj;\n  if (obj instanceof Date) return new Date(obj);\n  if (obj instanceof RegExp) return new Date(RegExp);\n  const newObj = new obj.constuctor;\n  for (let key in obj) {\n    if(obj.hasOwnProperty(key)) {\n      newObj[key] = deepClone(obj[key]);\n    }\n  }\n\n  return newObj;\n}\n")])])]),n("h2",{attrs:{id:"不需要借助第三个临时变量，实现两个变量的交换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不需要借助第三个临时变量，实现两个变量的交换","aria-hidden":"true"}},[t._v("#")]),t._v(" 不需要借助第三个临时变量，实现两个变量的交换")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function swap（a,b）{\n  b = b - a;\n  a = a + b;\n  b = a - b;\n  return [a,b];\n}\n")])])]),n("h2",{attrs:{id:"确保字符串的每个单词首字母都大写，其余部分小写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#确保字符串的每个单词首字母都大写，其余部分小写","aria-hidden":"true"}},[t._v("#")]),t._v(" 确保字符串的每个单词首字母都大写，其余部分小写")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function titleCase(str) {\n  var lstr = str.toLowerCase().split(' ');\n  for(var i = 0 ; i < lstr.length; i++) {\n    lstr[i] = lstr[i][0].toUpperCase() + lstr[i].substring(1, lstr[i].length);\n  }\n  var res = lstr.join(' ');\n  return res;\n}\ntitleCase(\"good night\"); // Good Night\n")])])]),n("h2",{attrs:{id:"清除字符串前后的空格（兼容所有浏览器）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除字符串前后的空格（兼容所有浏览器）","aria-hidden":"true"}},[t._v("#")]),t._v(" 清除字符串前后的空格（兼容所有浏览器）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function trim(str) {\n  if (str & typeof str === \"string\") {\n    return str.replace(/(^s*)|(s*)$/g, ''); //去除前后空白符\n  }\n}\n")])])]),n("h2",{attrs:{id:"去掉一组整型数组中重复的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去掉一组整型数组中重复的值","aria-hidden":"true"}},[t._v("#")]),t._v(" 去掉一组整型数组中重复的值")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let unique =  function(arr){\n  let hash={};\n  let data=[];\n  for (let i=0;i < arr.length; i++){\n    if (!hash[arr[i]])  {\n      hash[arr[i]] = true;\n      data.push(arr[i]);\n    }      \n  }\n  return data\n}\n")])])]),n("h2",{attrs:{id:"翻转字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#翻转字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 翻转字符串")]),t._v(" "),n("ul",[n("li",[t._v("split（）字符串转成数组；")]),t._v(" "),n("li",[t._v("reverse()翻转数组；")]),t._v(" "),n("li",[t._v("join()数组转化成字符串。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function reverseString(str){    \n  return str.split('').reverse().join('');\t\n}\n")])])]),n("h2",{attrs:{id:"找到提供的句子中最长的单词，并计算它的长度。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#找到提供的句子中最长的单词，并计算它的长度。","aria-hidden":"true"}},[t._v("#")]),t._v(" 找到提供的句子中最长的单词，并计算它的长度。")]),t._v(" "),n("ul",[n("li",[t._v("转化成数组；")]),t._v(" "),n("li",[t._v("根据元素长度排序；")]),t._v(" "),n("li",[t._v("输出最长元素并返回长度。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function findLongestString(str){\n  var arr = str.split(' ');\t\n  var arrSort = arr.sort(function (a,b) {\t   \n    return b.length - a.length;\n  });\n  return [arrSort[0], arrSort[0].length];\n}\n")])])]),n("h2",{attrs:{id:"截断一个字符串，如果字符串的长度比指定的参数num长，则把多余的部分用-来表示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#截断一个字符串，如果字符串的长度比指定的参数num长，则把多余的部分用-来表示","aria-hidden":"true"}},[t._v("#")]),t._v(" 截断一个字符串，如果字符串的长度比指定的参数num长，则把多余的部分用...来表示")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function truncate(str, num){\n  var trStr = str.slice(0, num);\n  if (trStr.length > num) {\t\t\t\t\t\n    return trStr.concat('...');\n  } else {\n    return str;\n  }\n}\n")])])]),n("h2",{attrs:{id:"判断一个字符串中出现次数最多的字符，统计这个次数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断一个字符串中出现次数最多的字符，统计这个次数","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断一个字符串中出现次数最多的字符，统计这个次数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("funcion findMaxStrCount(str) {\n  var countObj = {};\n  var max = '';\n  for(var i = 0; i < str.length; i++) {\n    var cur = str[i];\n    if(!countObj[cur]) {\n      countObj[cur] = 0;\n    } \n    countObj[cur]++;\n    if(max === '' || countObj[cur] > countObj[max]) { max = cur; }\n  }\n  return [max, countObj[max]];\n}\n\n")])])]),n("h2",{attrs:{id:"快速排序（quick-sort）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速排序（quick-sort）","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速排序（Quick Sort）")]),t._v(" "),n("p",[t._v("快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var quickSort = function(arr) {\n　if (arr.length <= 1) { return arr; }\n　var pivotIndex = Math.floor(arr.length / 2);\n　var pivot = arr.splice(pivotIndex, 1)[0];\n　var left = [];\n　var right = [];\n　for (var i = 0; i < arr.length; i++){\n　　if (arr[i] < pivot) {\n　　　left.push(arr[i]);\n　　} else {\n　　　right.push(arr[i]);\n　　}\n　}\n　return quickSort(left).concat([pivot], quickSort(right));\n};\n")])])]),n("h2",{attrs:{id:"用递归实现斐波那契数列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用递归实现斐波那契数列","aria-hidden":"true"}},[t._v("#")]),t._v(" 用递归实现斐波那契数列")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function fib(n){\n  if(typeof n === 'number' && n > 0 && parseInt(n) === n ) {\n    return n < 3 ? 1 : fib(n-1)+fib(n-2);　\n  } else {\n    return '输入不合法，请输入正整数！'；\n  }　　　\n}\n")])])]),n("h2",{attrs:{id:"数组中两两之差的最大值？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组中两两之差的最大值？","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组中两两之差的最大值？")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function maxDiffInArray(arr){\n  if ( arr instanceof Array) {\n    if (arr.length) {\n      let max = arr[0], min = arr[0];\n      for (let i = 0; i < arr.length; i++) {\n        if ( typeof arr[i]  !== 'number' ) {\n          return '输入不合法，数组存在非数字类型元素，请输入数字数组';\n        }\n        max = Math.max(arr[i], max), min = Math.min(arr[i], min);\n      }   \n      return max - min;　\n    } else {\n      return '输入不合法，数组为空，请输入非空数组';\n    }\n  } else {\n    return '输入不合法，请输入非空数组';\n  }　\n}\n")])])]),n("h2",{attrs:{id:"单向链表反转-js实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单向链表反转-js实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 单向链表反转-JS实现")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function reverseLinkedList(head) {\n     if (head === null || head.next === null) {\n         return head;\n     }\n     let newHead = null; \n     let nextHead = null;\n     while (head) {\n        nextHead = head.next; // 先记住当前节点的下一节点\n        head.next = newHead; // 把当前节点的指针指向上一节点\n        newHead = head; // 保留上一节点\n        head = nextHead; // 遍历下一节点\n     }\n     return newHead; // 最后head 为null跳出遍历，此时newHead就成了新链表的头结点了\n}\n")])])]),n("h2",{attrs:{id:"变形的链表反转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变形的链表反转","aria-hidden":"true"}},[t._v("#")]),t._v(" 变形的链表反转")]),t._v(" "),n("p",[t._v("给定一个单链表的头节点 head,实现一个调整单链表的函数，使得每K个节点之间为一组进行逆序，并且从链表的尾部开始组起，头部剩余节点数量不够一组的不需要逆序。")]),t._v(" "),n("p",[t._v("例如：链表:1->2->3->4->5->6->7->8->null, K = 3。那么 6->7->8，3->4->5，1->2各位一组。调整后：1->2->5->4->3->8->7->6->null。其中 1，2不调整，因为不够一组。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    public ListNode reverseKGroup(ListNode head, int k) {\n        ListNode temp = head;\n        for (int i = 1; i < k && temp != null; i++) {\n            temp = temp.next;\n        }\n        //判断节点的数量是否能够凑成一组\n        if(temp == null)\n            return head;\n\n        ListNode t2 = temp.next;\n        temp.next = null;\n        //把当前的组进行逆序\n        ListNode newHead = reverseList(head);\n        //把之后的节点进行分组逆序\n        ListNode newTemp = reverseKGroup(t2, k);\n        // 把两部分连接起来\n        head.next = newTemp;\n        \n        return newHead;\n    }\n    \n    //逆序单链表\n    private static ListNode reverseList(ListNode head) {\n        if(head == null || head.next == null)\n            return head;\n        ListNode result = reverseList(head.next);\n        head.next.next = head;\n        head.next = null;\n        return result;\n    }\n\npublic ListNode solve(ListNode head, int k) {\n    // 调用逆序函数\n    head = reverse(head);\n    // 调用每 k 个为一组的逆序函数（从头部开始组起）\n    head = reverseKGroup(head, k);\n    // 在逆序一次\n    head = reverse(head);\n    return head;\n}\n")])])]),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("p",[t._v("这里所列举的一些算法题，应付多数互联网公司应该就可以了，不过若想去字节跳动这个算法驱动的公司，最后还是的去Leecode等刷题网站刷一百题以上的算法。")])])},[],!1,null,null,null);e.default=r.exports}}]);