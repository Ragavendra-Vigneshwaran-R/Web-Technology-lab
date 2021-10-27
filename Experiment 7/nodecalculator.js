var http = require('http');
var cal= require('./calculator');
url = require("url");
querystring=require("querystring");
http.createServer(function(req,res){
        var query =url.parse(req.url).query;
        console.log(query);
        var input=querystring.parse(query)["result"];
        res.writeHead(200,{'content-Type':'text/html'});
        res.write("<body style='background-color:#ffedbc;'><center><div style='background-color:#ed4264;margin-top:10%;'>");
        res.write("<h1>INPUT : "+input+"</h1>")
        res.write("<h1>RESULT : "+cal.calculate(input)+"</h1>");
        res.write(" </div></center></body>");
        res.end();
}).listen(7010);
console.log("Your server is running at port at the port 7010....")
