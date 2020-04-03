//引入http模块
var http = require("http")
//创建服务器
var server = http.createServer(function (req, res) {
    //设置响应头
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    })
    console.log(req.url)

    if (req.url == "/red") {
        res.write("red")
    } else {
        res.write("默认")
    }
    //结束响应
    res.end()
})
server.listen(3000)