var querystring = require("querystring")
//querystring查询字符串

// {
//     unescapeBuffer: [Function: unescapeBuffer],
//     unescape: [Function: qsUnescape],
//     escape: [Function: qsEscape],
//     stringify: [Function: stringify],
//     encode: [Function: stringify],
//     parse: [Function: parse],
//     decode: [Function: parse]
//   }

//parse 实现反序列化  可以反序列化成一个对象
// var data=querystring.parse("username=tom&&password=123")
// console.log(data)

// var data =querystring.escape("wang===zh+-*/e")

var data=querystring.unescape("wang%3D%3D%3Dzh%2B-*%2Fe")


console.log(data)
