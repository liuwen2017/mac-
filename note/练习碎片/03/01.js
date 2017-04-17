/**
 * Created by liujunhang on 2017/3/8.
 */
var myvar = '变量值';
(function (){
    console.log(myvar);
    var myvar = '内部变量值';
})();


var a = 'hello';

function show() {
    console.log(a);
    var a = 'world';
}
show();//undefined


/*
    myvar 提升

 */