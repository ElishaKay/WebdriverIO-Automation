var express = require('express');
var dotenv = require('dotenv').config();
var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });


    //posting the list of questions from driving-tests site 
    app.post('/api/drivingquestions', function(req,res){
        console.log(req.body);
        // if (typeof req.user!=='undefined'){
        //          connection.query('INSERT INTO message (message_sent_date, message_content, client_id) VALUES (NOW(),"'+req.body.message+'","' +req.user.client_id+'")');
        //         console.log("found req.user.client_id");
        //     } else {
        //         connection.query('INSERT INTO message (message_sent_date, message_content) VALUES (NOW(),"'+req.body.message+'")');
        //         console.log("didnt finnd req.user");
        //     };
        res.send('successfully called api'); 
    });

app.listen(8080, () => console.log('Example app listening on port 8080!'));
