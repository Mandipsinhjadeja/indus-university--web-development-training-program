var http = require('http')
var a = 10
var b = 20
var c = a + b
var msg

if(c == 30)
{
    msg = "Sum is 30"
}else{
    msg = "Sum is not 30"
}

http.createServer((req,res) =>{

    res.writeHead(200,{'content-type' : 'text/html'})
    res.write("A Value is "+a)
    res.write("<br/>B Value is "+b)
    res.write(`<br/><b>Sum is ${a+b}</b>`)
    res.end ("<br/> "+ msg + "<br/>Done")
}).listen(4000)


console.log("Server is stared on http://127.0.0.1:4000")