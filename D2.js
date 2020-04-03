var fs = require("fs")
fs.readFile("./static/1.txt", function (err, data) {
    // console.log(err)
    // console.log(data.toString())
    
})
fs.writeFile("./static/3.txt","sss",function(err){
    console.log(err)
})
