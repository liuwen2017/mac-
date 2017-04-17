/**
 * Created by liujunhang on 2017/3/7.
 */
//解构实例
let [one,[[two],three]] = ['hello,world',[['this is two'],'hello,girl']];

//检测
console.log(one);

console.log(two);

console.log(three);

let [,,test] = ['a','b','ccc'];

console.log(test);


//此时 第二个需要赋值的变量前面加三个点，就会拥有除了第一个变量后面的所有的值,并且会以数组的形式被赋值给变量
let [a1,...a2] = ['aaa','bbb','ccc','ddd'];
console.log(a1); // aaa
console.log(a2); // ['bbb','ccc','ddd']

let [x,y,...z] = ['this is x','this is y','this is z'];
console.log(x);
console.log(y);
console.log(z);


let [d1,d2,...d3] = ['10'];
console.log(d1); // 10
console.log(d2); // undefined let将d2值声明 但是没有进行赋值 为undefined -- 解构不成功
console.log(d3); // []  赋值为一个数组，但是数组里面却没有值


//不完全解构  -- 即等号左边的模式,只匹配y一部分的等号右边的数组。这种情况下依然会解构成功
let [q1,q2] = ['1','2','3'];
console.log(q1);  // 1
console.log(q2);  // 2

let [w1,[w2,w4],w3] = ['aaa',['bbb','ccc','ddd'],'eee'];
console.log(w1);//aaa
console.log(w2);//bbb
console.log(w3);//eee
console.log(w4);//ccc

//以上例子都是不完全解构的例子


/*
 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

 // 报错
 let [foo] = 1;
 let [foo] = false;
 let [foo] = NaN;
 let [foo] = undefined;
 let [foo] = null;
 let [foo] = {};

 上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），
 要么本身就不具备 Iterator 接口（最后一个表达式）。


 */



