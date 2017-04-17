/**
 * Created by liujunhang on 2017/3/7.
 */
//默认值 -- 解构赋值允许设置默认值
    "use strict"
let [a,b='hello,world'] = ['good good study'];
console.log(a + ','+b);


let [d1,d2='dddddddd'] = ['d1d1d1',undefined];

console.log(d1); // d1d1d1
console.log(d2); //dddddddd

//当等号右边的数组中是undefined 的，并且同时与undefined对应的等号左边的变量具有默认值，此时undefined就会
//被忽略掉

/*
 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
 所以，如果一个数组成员[等号右边]不严格等于undefined，默认值是不会生效的。
 反过来讲，如果等号右边数组中的值严格等于undefined，那么默认值就会生效
 */
let [x = 1] = [undefined];
console.log(x); // 1  此时等号右边数组中的值严格等于undefined ，所以右边的默认值就会生效

let [y = 1] = [null];
console.log(y); // null 此时等号右边的值不严格等于 undefined ，所以右边的默认值不会生效



//---------------------------------------------------------------------

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值
//如下
function f() {
    console.log(1111111);
}

let [aq = f()] = ['1'];
console.log(aq); // 1  此时输出值为1 ，但是此时函数f没有执行，因为此时变量aq能够取到值，而
//在此种情景下 是惰性求值，所以 函数不会执行。

//上面的代码等于下面的代码
let aq ;
if([1][0] === undefined){
    aq= f();
}else {
    aq = [1][0];
}

/*
 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
 let [x = 1, y = x] = [];     // x=1; y=1
 let [x = 1, y = x] = [2];    // x=2; y=2
 let [x = 1, y = x] = [1, 2]; // x=1; y=2
 let [x = y, y = 1] = [];     // ReferenceError

 上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。
 */