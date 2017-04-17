/**
 * Created by liujunhang on 2017/3/6.
 */
//const 命令  -- 声明一个常量
"use strict";

const hello = 'hello,world';

//const 声明的是一个只读的常量，一旦声明，则不可以更改，并且一旦使用了const ，就必须立即初始化
//否则就会报错

console.log(hello);

//const 与let  一样，只在声明的块级作用域内有效

//const 声明的常量同样不可以提升，并且同样存在暂时性死区,只能够在声明位置的后面使用

//const  声明的常量与let  一样不可以重复进行声明

