var express = require('express');
var dotenv = require('dotenv').config();
var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bodyParser = require('body-parser');
var app = express();

// for heroku
// app.set('port', process.env.PORT || 80);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });


app.get('/', function(req, res) {
         res.render('index.ejs'); // load the single view file (angular will handle the page changes on the front-end)
 });

app.get('/questions',function(req,res){

        connection.query('select * from question where section = 1 and img is null', function (err, rows) {
            res.json(rows);
        });
    });

    //posting the list of questions from driving-tests site 
    app.post('/api/drivingquestions', function(req,res){
        console.log(req.body);
        console.log(req.body.img);

    var qstr = 'INSERT INTO question (question_save_date, question_number, question_id, question, answer, img, section) VALUES (NOW(),"'+req.body.question_number+'","' +req.body.question_id+'","' +req.body.question+'","' +req.body.answer+'","' +req.body.img+'","' +req.body.section+'")';
    connection.query(qstr, function(err) {
        if (err) {
            console.log("A wild error appeared!", err);
        }
    });

        res.send('successfully called api'); 
    });

app.listen(80, () => console.log('Example app listening on port 80!'));
