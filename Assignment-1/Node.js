var http = require('http'); 

var server = http.createServer(function(req, res){ 
    if (req.url == '/') {

        res.writeHead(200, { 'Content-Type': 'text/html'});

        res.write('<html><body><h1>Welcome to my Node.js Application</h1><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
        res.end();
    }

    else if (req.url == "/about"){

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><h2>This is the About Page</h2><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
        res.end();
    }

    else if (req.url == '/contact') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><h3>This is the Contact Page</h3><p>John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>');
        res.end();
    }

    else if (req.url == '/gallery') {

      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.write('<html><body><h3>This is the Gallery Page</h3></body></html>');
      res.end();
  }

    else
        res.end('Invalid Request')

    

});

server.listen(5000);
console.log('NodeJS web server at port 5000 is running...')

/* Bumanlag, Allen Ross F.
   WD - 201
   January 31 ,2022
*/