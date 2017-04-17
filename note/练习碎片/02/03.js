/**
 * Created by liujunhang on 2017/3/7.
 */
//将使用函数声明完成的闭包改写为使用函数表达式的闭包
//用法：模块化代码
//先来声明一个简单的函数   

function aaa() {
    console.log(1111111);
}


//调用函数
aaa();  //  1111111

//在js中可以将函数声明放置在一个括号中
/*
    (function aaa(){
        console.log(111111);
    })
上面的这一步操作就将函数声明变成了函数表达式

同时，可以在上面变成函数表达式的函数括号后面在加一个括号，作用是立刻调用

(function aaa(){
    console.log(1111111)
})()


此时上面的代码--函数表达式 就能够立刻调用

因为此种写法的函数表达式会立即调用，所以可以将函数的名字去掉变成如下的写法

(function(){
    console.log(1111111)
})()
*/

/*
回顾刚才在使用的闭包函数
 function aaa()
 {
 var a = 1;

 return function (){
 a++;
 console.log(a);
 }
 }

 //调用函数
 var b = aaa();

 针对上面的这个闭包函数，可以将其更改为函数表达式
 */

var aaa = (function(){
    var a = 1;
    return function (){
        a++;
        console.log(a);
    }
})();

//此时针对上面的闭包函数(函数表达式)，当代码在执行的一瞬间，括号内的匿名函数其实就已经执行了
//而此时变量aaa 代表的则是return返回的函数

aaa();  //2

