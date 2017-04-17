/**
 * Created by liujunhang on 2017/3/7.
 */
//闭包函数


/*
* 关于闭包
*
* 1. 什么是闭包？
*
* 2. 闭包有什么好处？应用在哪里
*
* 3. 闭包有哪些需要注意的地方
*
* */


//01 函数嵌套函数，内部函数可以引用外部函数的参数和变量

// function test(a) {
//     var b = 'hello,world';
//
//     function bbb() {
//         console.log(a);
//         console.log(b);
//     }
//
//     return bbb;
// }
//
// var a = test('this is test');
//
// console.log(a());


/*
* 此时嵌套在函数test内部的bbb函数内部能够访问到本身外部的变量b  以及作为形参传入的变量a
* */


//js的垃圾回收机制会被闭包函数所影响
/*
* 当一个普通的函数执行完成之后，函数内部的变量会被回收销毁，而闭包函数则会让变量始终存储在函数内部当中
* */


function aaa()
{
    var b = 'hello,world';
    function bbb(){
        console.log(b);
    }

    return bbb;
}

var c = aaa();//此时函数aaa在此刻已经执行完成，但是aaa中的变量并没有被回收，因为bbb函数在使用

//所以此时使用c 就会得到函数bbb中的内容
c(); // hello,world


//此时函数aaa中的变量b，在函数aaa结束之后并不会被回收，原因在于在aaa函数的内部，存在函数
//bbb，在bbb函数中在使用这个变量 b

