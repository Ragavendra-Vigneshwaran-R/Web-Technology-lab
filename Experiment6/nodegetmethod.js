http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
        var path=url.parse(request.url).pathname;
        console.log('Request for'+path+'recevied.');
        var query =url.parse(request.url).query;
        console.log(query);
        var firstname=querystring.parse(query)["firstname"];
        var lastname=querystring.parse(query)["lastname"];
        var age=querystring.parse(query)["age"];
        var gender=querystring.parse(query)["gender"];
        var department=querystring.parse(query)["department"];
        var email=querystring.parse(query)["email"];
        var number=querystring.parse(query)["number"];
        var yearofstudy=querystring.parse(query)["yearofstudy"];
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(`<h1 style="background: linear-gradient(135deg, #ffedbc, #ed4264 );">Congratulations ${firstname} ${lastname}!!!</h1>`);
        response.write(`<h2>Your Registration form has been successfully submitted using GET method!!!</h2>`);
        response.write(`<h2>Your details are : </h2>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Name</span>         :${firstname} ${lastname}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Age</span>          :${age}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Gender</span>       :${gender}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Department</span>   :${department}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Email</span>        :${email}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Number</span>       :${number}</h1>`);
        response.write(`<h1><span style="display: inline-block;font-weight: 500;margin-bottom: 5px">Year Of Study</span>:${yearofstudy}</h1>`);
        response.end();
        
}
http.createServer(onRequest).listen(7010);
console.log('Server has started at port number 7010...');