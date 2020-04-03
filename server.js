//引入http模块   require 加载
var http=require("http")
//创建服务器 
var server=http.createServer(function(req,res){
    console.log("hello node")
    //设置响应头   
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    //结束响应
    res.end("end")
})
//监听端口
server.listen(3000)