var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url == "/4.png") {
        fs.readFile("./static/4.png", function (err, data) {
            res.end(data)
        })
    } else if (req.url == "/index.css") {
        fs.readFile("./static/index.css", function (err, data) {
            res.end(data.toString())
        })
    } else if (req.url == "/red.html") {
        fs.readFile("./static/red.html", function (err, data) {
            res.end(data.toString())
        })
    } else {
        res.end("404")
    }
}).listen(3000, function () {
    console.log("服务器已经挂起")
})