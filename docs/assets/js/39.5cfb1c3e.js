(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{298:function(t,v,a){"use strict";a.r(v);var _=a(38),e=Object(_.a)({},function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),a("p",[t._v("正则表达式（regular expression）是一种表达文本模式（即字符串结构）的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。")]),t._v(" "),a("p",[t._v("新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。另一种是使用RegExp构造函数。")]),t._v(" "),a("p",[t._v("它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则表达式。")]),t._v(" "),a("h2",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 匹配规则")]),t._v(" "),a("p",[t._v("正则表达式的规则很复杂。")]),t._v(" "),a("h3",{attrs:{id:"字面量字符和元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字面量字符和元字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 字面量字符和元字符")]),t._v(" "),a("p",[t._v("大部分字符在正则表达式中，就是字面的含义，比如/a/匹配a，/b/匹配b。如果在正则表达式之中，某个字符只表示它字面的含义（就像前面的a和b），那么它们就叫做“字面量字符”（literal characters）。")]),t._v(" "),a("p",[t._v("除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。它们叫做“元字符”（metacharacters），主要有以下几个。")]),t._v(" "),a("ul",[a("li",[t._v("点字符（.) 匹配除回车（\\r）、换行(\\n) 、行分隔符（\\u2028）和段分隔符（\\u2029）以外的所有字符。注意，对于码点大于0xFFFF字符，点字符不能正确匹配，会认为这是两个字符。")]),t._v(" "),a("li",[t._v("位置字符：位置字符用来提示字符所处的位置，主要有两个字符：^ 表示字符串的开始位置，$ 表示字符串的结束位置")]),t._v(" "),a("li",[t._v("选择符（|）：竖线符号（|）在正则表达式中表示“或关系”（OR），即cat|dog表示匹配cat或dog。")]),t._v(" "),a("li",[t._v("转义符\\ ：正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠。一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\\。需要特别注意的是，如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。")]),t._v(" "),a("li",[t._v("特殊字符：对一些不能打印的特殊字符，提供了表达方法：\\cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。[\\b] 匹配退格键(U+0008)，不要与\\b混淆。\\n 匹配换行键。\\r 匹配回车键。")]),t._v(" "),a("li",[t._v("字符类：字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如[xyz] 表示x、y、z之中任选一个匹配。")]),t._v(" "),a("li",[t._v("脱字符（^）果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。比如，[^xyz]表示除了x、y、z之外都可以匹配。")]),t._v(" "),a("li",[t._v("连字符（-）对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围。比如，[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示26个大写字母。")])]),t._v(" "),a("h3",{attrs:{id:"预定义模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预定义模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 预定义模式")]),t._v(" "),a("p",[t._v("预定义模式指的是某些常见模式的简写方式。")]),t._v(" "),a("ul",[a("li",[t._v("\\d 匹配0-9之间的任一数字，相当于[0-9]。")]),t._v(" "),a("li",[t._v("\\D 匹配所有0-9以外的字符，相当于[^0-9]。")]),t._v(" "),a("li",[t._v("\\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。")]),t._v(" "),a("li",[t._v("\\W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。")]),t._v(" "),a("li",[t._v("\\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \\t\\r\\n\\v\\f]。")]),t._v(" "),a("li",[t._v("\\S 匹配非空格的字符，相当于[^ \\t\\r\\n\\v\\f]。")]),t._v(" "),a("li",[t._v("\\b 匹配词的边界。")]),t._v(" "),a("li",[t._v("\\B 匹配非词边界，即在词的内部。")])]),t._v(" "),a("p",[t._v("通常，正则表达式遇到换行符（\\n）就会停止匹配。")]),t._v(" "),a("h3",{attrs:{id:"重复类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复类","aria-hidden":"true"}},[t._v("#")]),t._v(" 重复类")]),t._v(" "),a("p",[t._v("模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。")]),t._v(" "),a("h3",{attrs:{id:"量词符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#量词符","aria-hidden":"true"}},[t._v("#")]),t._v(" 量词符")]),t._v(" "),a("p",[t._v("量词符用来设定某个模式出现的次数。")]),t._v(" "),a("ul",[a("li",[t._v("? 问号表示某个模式出现0次或1次，等同于{0, 1}。")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("星号表示某个模式出现0次或多次，等同于{0,}。")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("加号表示某个模式出现1次或多次，等同于{1,}。")])])])]),t._v(" "),a("h2",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),a("p",[t._v("修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部。")]),t._v(" "),a("p",[t._v("修饰符可以单个使用，也可以多个一起使用。")]),t._v(" "),a("h3",{attrs:{id:"g-修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#g-修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" g 修饰符")]),t._v(" "),a("p",[t._v("默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。g修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。")]),t._v(" "),a("p",[t._v("正则模式含有g修饰符，每次都是从上一次匹配成功处，开始向后匹配。")]),t._v(" "),a("h3",{attrs:{id:"i-修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" i 修饰符")]),t._v(" "),a("p",[t._v("默认情况下，正则对象区分字母的大小写，加上i修饰符以后表示忽略大小写（ignoreCase）。")]),t._v(" "),a("h3",{attrs:{id:"m-修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" m 修饰符")]),t._v(" "),a("p",[t._v("m修饰符表示多行模式（multiline），会修改^和$的行为。默认情况下（即不加m修饰符时），^和$匹配字符串的开始处和结尾处，加上m修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\\n）。")]),t._v(" "),a("h2",{attrs:{id:"实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例属性")]),t._v(" "),a("p",[t._v("正则对象的实例属性分成两类。")]),t._v(" "),a("p",[t._v("一类是修饰符相关，用于了解设置了什么修饰符:")]),t._v(" "),a("ul",[a("li",[t._v("RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符。")]),t._v(" "),a("li",[t._v("RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符。")]),t._v(" "),a("li",[t._v("RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符。")]),t._v(" "),a("li",[t._v("RegExp.prototype.flags：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。\n上面四个属性都是只读的。")])]),t._v(" "),a("p",[t._v("另一类是与修饰符无关的属性，主要是下面两个。")]),t._v(" "),a("ul",[a("li",[t._v("RegExp.prototype.lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义，详细介绍请看后文。")]),t._v(" "),a("li",[t._v("RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。")])]),t._v(" "),a("h2",{attrs:{id:"实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),a("p",[t._v("正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。")]),t._v(" "),a("p",[t._v("如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配。")]),t._v(" "),a("p",[t._v("lastIndex属性只对同一个正则表达式有效，所以下面这样写是错误的:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var count = 0;\nwhile (/a/g.test('babaa')) count++;\n")])])]),a("p",[t._v("上面代码会导致无限循环，因为while循环的每次匹配条件都是一个新的正则表达式，导致lastIndex属性总是等于0。")]),t._v(" "),a("p",[t._v("如果正则模式是一个空字符串，则匹配所有字符串。")]),t._v(" "),a("p",[t._v("正则实例对象的exec方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null。")]),t._v(" "),a("p",[t._v("如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。整个数组的length属性等于组匹配的数量再加1。")]),t._v(" "),a("p",[t._v("exec方法的返回数组还包含以下两个属性：")]),t._v(" "),a("ul",[a("li",[t._v("input：整个原字符串。")]),t._v(" "),a("li",[t._v("index：整个模式匹配成功的开始位置（从0开始计数）。")])]),t._v(" "),a("p",[t._v("如果正则表达式加上g修饰符，则可以使用多次exec方法，下一次搜索的位置从上一次匹配成功结束的位置开始。")]),t._v(" "),a("p",[t._v("正则实例对象的lastIndex属性不仅可读，还可写。设置了g修饰符的时候，只要手动设置了lastIndex的值，就会从指定位置开始匹配。")]),t._v(" "),a("p",[t._v("字符串的实例方法之中，有4种与正则表达式有关。")]),t._v(" "),a("ul",[a("li",[t._v("String.prototype.match()：返回一个数组，成员是所有匹配的子字符串。")]),t._v(" "),a("li",[t._v("String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。")]),t._v(" "),a("li",[t._v("String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串。")]),t._v(" "),a("li",[t._v("String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。")])])])},[],!1,null,null,null);v.default=e.exports}}]);