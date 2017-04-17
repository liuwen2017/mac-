 // 定义引入模块路径
require.config({
　　　　paths: {
　　　　 "jquery": "./Libs/jquery-1.12.4.min",
		"math":'./math'
　　　　}
　　});
// 加载指定模块
require(['jquery','math'],function($,math){
	console.log($('.d1').html());
	alert(math.a1(1,22));
});

// 使用插件
// require(['domready!'],function(doc){
// 	alert('dom加载完毕');
// });

　　require(['domready!'], function (doc){
　　　　// called once the DOM is ready
		alert(1111);
　　});