const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {

    console.log("Client request URL: ", request.url);

    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
    else if (request.url === "/cars/new") {
         fs.readFile('views/newcars.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }   
    else if(request.url === '/images/ftype.jpg'){    
        fs.readFile('./images/ftype.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/lovely.jpg'){    
        fs.readFile('./images/lovely.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/mycar.jpg'){    
        fs.readFile('./images/mycar.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/myfavcat.jpg'){    
        fs.readFile('./images/myfavcat.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/cat1.jpg'){    
        fs.readFile('./images/cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/jaguar.jpg'){    
        fs.readFile('./images/jaguar.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else {
        response.end('File not found!!!');
    }
    json: true
});
server.listen(7077);
console.log("listening on port 7077");