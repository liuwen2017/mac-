/**
 * Created by liujunhang on 2017/3/6.
 */
//暂时性死区
/*
* 在块级作用域内使用let声明的变量，无论是声明前还是声明后，只要在当前的作用域范围内
* 都不能够重新进行定义或者使用，即使当前使用的变量在当前作用域外部是一个全局作用域
* ，出现此种情况除了使用let以外，还包括const 声明的常量，此种现象被称之为暂时性死区
* temporal dead zone，简称 TDZ
* */

var tmp = "hello,world";

if(true){
    //此时出现了暂时性死区，在当前的if作用域内，出现了let声明的变量，所以在
    //当前作用域中，只要let没有声明，变量只要提前使用，都会报错
    //tmp = "this is test text";
    //let tmp;

}

function abc (x=y,y=2){
    return [x,y];
}

//abc();//此时会报错，是因为此时x等于y ，而y还没有声明，属于死区

//针对上面的死区，可以进行如下更改

function test (x=2,y=x){//需要注意的是，此时y=x 不会报错，但是x=y就会报错，原因依然是出现了暂时死区
    return[x,y];
}

test();//此时不会报错


//同时需要注意的是在相同作用域内不能够使用let重复声明一个变量

function a (arg){
    //let arg= 'aaaa';//此时会报错，形参和arg变量处于同一个作用域内
    {
        let arg = 'vbbbb'; // 此时不会报错，因为已经不是一个作用域
    }

}