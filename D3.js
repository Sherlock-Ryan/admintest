var path = require("path")
// console.log(path.basename("aa/bb/cc/server.js"))

// console.log(path.dirname("aa/bb/cc/server.js"))

// console.log(path.format({
//     dir: "/aa",
//     root: "/bb/",
//     base: "server.js",
//     name: "aaaaa",
//     ext: ".css"
// }))

var begin="c:/aa/b"
var end="c:/dd/v"
console.log(path.relative(begin,end))