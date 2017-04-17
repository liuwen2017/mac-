var http = require("http");

var server = http.createServer(function (req,res){
	// req request. res  response
	//设置http头部，状态码是200，文件类型为html
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.end('hello,world');
});

//run 
server.listen(8080,'127.0.0.1');