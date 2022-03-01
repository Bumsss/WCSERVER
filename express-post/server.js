//Name: Bumanlag, Allen Ross F.
//App Name: EXPRESS - POST // server.js
//Description:This program uses POST method and the result shows that the URL doesn't shows the inputed value.

var express = require("Express");
var app = express();
var bodyParser = require('body-parser');

//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'));
app.get('/index.html', function (req,res) {
    res.sendFile( __dirname + "/" + "index.html");
})


app.post('/process_post', urlencodedParser, function (req, res) {
    //Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        stud_course: req.body.stud_course,
        stud_age: req.body.stud_age,
        stud_comments: req.body.stud_comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log( "Server listening at http://%s:%s", host, port);
})