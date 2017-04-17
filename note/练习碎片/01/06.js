/**
 * Created by liujunhang on 2017/3/6.
 */
//const 本质

/*
*const 保证的并不是变量的值不得改动，而是变量指向的那个内存地址不得改动
*对于简单的数据类型(数值，字符串，布尔值)，值就保存在变量指向的那个内存地址,因此等同于常量
*但是对于复合类型的数据（主要是对象和数组）变量指向的内存地址，保存的只是一个指针，const只能保证指针
* 是固定的，至于它指向的数据结构是不是可变的，则无法保证
* 因此，将一个对象声明为常量必须非常小心。
* */
"use strict";

const page = 'hello,world';

console.log(page);


//将一个对象设置为常量  保存
const obj = {};

//向这个对象中添加属性
obj.a1 = 'hello,world';

obj.a2 = 'this is test file';

//检测后发现并没有报错 ，说明const 不能够锁住对象的内容
console.log(obj);

//obj = []; //将obj 指向另外的一个对象，报错，此时const只是锁住了指针。

//数组
const  a = [];

a.push('测试1');
a.push('测试2');

console.log(a);//此时添加成功

//a = ['hello']; // 此时会报错


//如果想要真正的冻结锁住常量 ，可以使用object.freeze方法
//使用这个方法在普通模式下会让更改被冻结的对象的代码失效，在严格模式下会报错

const arr = Object.freeze(['hello,world']);

// arr.push('测试1'); // 此时就会报错，因为对象已被冻结


//下面是一个将对象本身和本身属性都冻结的一个函数
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, value) => {
        if ( typeof obj[key] === 'object' ) {
        constantize( obj[key] );
    }
});
};