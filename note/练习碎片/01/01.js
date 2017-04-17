/**
 * Created by liujunhang on 2017/3/6.
 */
{
    var a = 10;
    let b = 20;
    //console.log(b);
}

//console.log(a);
//console.log(b);

for(let i = 10;i<20;i++){
    //console.log(i);
}
//console.log(i);  此时i 会报错 在for循环的局部作用域外部并不存在变量i

for(let i=0;i<5;i++){
    //let i = 'hello,world';
    //console.log(i);
}
/*
* 在使用for循环的时候，for 循环语句部分是一个父作用域 ，而循环体内是一个单独的子作用域
* */
for(var i = 0;i <5;i++){
    var i = 10;
    console.log(i);
}

console.log(i);//11


/*
* 在js中存在变量提升的情况，当声明一个变量之后，在变量声明的语句之前使用这个变量
* 会提示undefined 未定义 ，但是不会报错，这就出现了一次变量提升的情况 ，将代码后面的
* 变量声明给提前到了前面，但是赋值操作却没有提前，所以会出现上述情况。
*
* 而在es6中使用let则将这种变量提升的现象给杜绝了，在使用let声明的变量之前使用变量就会报错
* */
console.log(abc);
let abc = 'hello,world';
console.log(abc);


