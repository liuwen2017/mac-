/**
 * Created by liujunhang on 2017/3/7.
 */
//用处：js模块化代码

var aaa = (function(){
    var a = 'hello,world';
    function a1(){
        console.log(a+'我是私有函数a1');
    }

    function a2(){
        console.log(a+'我是私有函数a2');
    }

    return {
        a1:a1,
        a2:a2
    }
})();

aaa.a1();
aaa.a2();


var showFun = (function(){
    var a = 1;
    function a1(){
        a++;
        console.log(a);
    }

    function a2(){
        a++;
        console.log(a);
    }

    return {
        a1:a1,
        a2:a2
    }
})();

showFun.a1();  //2
showFun.a2();  //3