/**
 * Created by liujunhang on 2017/3/6.
 */
"use strict"
//块级作用域内声明函数
function abc(){
    console.log("我是全局作用域内的函数");
}

if(true){
    function abc() {
        console.log("我是局部作用域的函数");
    }

    abc();
}

abc();//此时因为函数提升的原因导致在局部作用域内的函数会覆盖掉全局作用域内的函数，但是此种情况
//仅限于浏览器的情况下，如果宿主环境发生改变，例如在nodejs中，并且开启了适配es6的严格模式，则块级
//作用域内的函数并不会覆盖掉全局作用域的函数


