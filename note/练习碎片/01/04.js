/**
 * Created by liujunhang on 2017/3/6.
 */
"use strict";
//do表达式

{
    let a = 10;
    let b = 'hello,world';
}

//本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值
//但是在块级作用域之外没有办法得到块级作用域内的值，除非块级作用域内的值为全局变量

//提案 ： 添加一个do  这样a 就能够获得块级里面的返回值
// 但是经过实际的测试，发现目前是不可以的，会报错
let a =do {
    let x = 'hello,world';
}
