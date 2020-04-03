var url = require("url")

// //使用url模块后可以使用其下的方法

var data = url.parse("http://localhost:3000/red?username=tom&password=123")
// console.log(data)

//parse 可以把对象转换成一个有结构化的字符串


var data = url.resolve("/aa/bb/cc", "dd")   // 会用后边的参数代替掉第一个参数的最后一部分

var data2 = url.resolve("http://localhost:3000/aa/", "dd")
//若端口后方有“/”则不会代替 反之会代替

// console.log(data2)


var objurl = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:3000',
    port: '3000',
    hostname: 'localhost',
    hash: null,
    search: '?username=tom&password=123',
    query: 'username=tom&password=123',
    pathname: '/red',
    path: '/red?username=tom&password=123',
    href: 'http://localhost:3000/red?username=tom&password=123'
}
var mat=url.format(objurl)
console.log(mat)