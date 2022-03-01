//Name: Bumanlag, Allen Ross F.
//App Name: EXPRESS - GET // server.js
//Description: This program uses GET method and the result shows that it displays the queried string in plain text format.

var express = require("Express");
var app = express();


app.use(express.static('public'));

app.get("/index.html", function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {
    //Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        stud_course: req.query.stud_course,
        stud_age: req.query.stud_age,
        stud_comments: req.query.stud_comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log( "Server listening at http://%s:%s", host, port);
});