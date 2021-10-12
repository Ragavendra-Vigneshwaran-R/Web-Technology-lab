http = require('http');
querystring = require('querystring');
var qs,firstname1,lastname1,age1,gender1,department1,email1,number1,yearofstudy1;
http.createServer(function(request,response){
    var data1='';
    request.on('data',function(chunk){
        console.log(chunk);
        data1+=chunk;
        console.log("Data in String Format: "+data1);
    });
    request.on('end',function(){
        qs=querystring.parse(data1);
        console.log(qs);
        firstname1=qs["firstname"];
        lastname1=qs["lastname"];
        age1=qs['age'];
        gender1=qs['gender'];
        department1=qs['department'];
        email1=qs['email'];
        number1=qs['number'];
        yearofstudy1=qs['yearofstudy'];
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(`<h1 style="background: linear-gradient(135deg, #E5AAC3 , #9A52C7 );color:white;">Congratulations ${firstname1} ${lastname1}!!!</h1>`);
        response.write(`<h2>Your Registration form has been successfully submitted using POST method!!!</h2>`);
        response.write(`<h2>Your details are : </h2>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Name</span>         :${firstname1} ${lastname1}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Age</span>          :${age1}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Gender</span>       :${gender1}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Department</span>   :${department1}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Email</span>        :${email1}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Number</span>       :${number1}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Year Of Study</span>:${yearofstudy1}</h1>`);
        response.end();
    });
}).listen(5010);
console.log("Server has started at the port 5010...");
