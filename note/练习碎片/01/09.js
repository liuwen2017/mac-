/**
 * Created by liujunhang on 2017/3/7.
 */
//global 对象
/*
    es5 的顶层对象在不同的宿主环境下代表不同的对象：

    1. 在浏览器里面，顶层对象是window， 但是node中和web worker中没有window

    2. 浏览器和web worker里面，self指向顶层对象，但是node中没有self

    3. nodel里面，顶层对象是global，但其他环境都不支持

    而同一段代码，为了能够在不同的环境下都能够取得顶层对象，一般都是采用this，但是具有局限性

    局限性：

    1. 全局环境中，this会返回顶层对象。但是，Node模块和ES6模块中，this返回的是当前模块。

    2. 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。
       但是，严格模式下，这时this会返回undefined

    3. 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。
       但是，如果浏览器用了CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法
       都可能无法使用。

 */
//下面这种方案可以勉强的取得顶层对象
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

console.log(getGlobal());

//下面是第二种可以勉强取得顶层对象的方法
(typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
        ? global
        : this);


