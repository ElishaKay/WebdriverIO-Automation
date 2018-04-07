// 'use strict';

// var dotenv = require('dotenv').config();
// var dbconfig = require('./config/database');
// var mysql = require('mysql');
// var connection = mysql.createConnection(dbconfig.connection);
// // var bodyParser = require('body-parser');
// // var urlencodedparser = bodyParser.urlencoded({extended:false});

//         connection.query("select * from blogpost", function (err, rows) {
//             console.log(rows);
//         });
      

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

var LoginPage = require('../pageObjects/loginPage');
var ForgotPasswordPage = require('../pageObjects/forgotPasswordPage');
var HomePage = require('../pageObjects/homePage');


client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();


      LoginPage.open();
      LoginPage.username.setValue(process.env.USERNAME);
      LoginPage.password.setValue(process.env.PASSWORD);
      LoginPage.loginClick();
      browser.waitForVisible('.alert-error');

      LoginPage.loginError.getText().should.contain('Your email address, handle,'
         + ' or password is incorrect. Please try again.');
   

   
      LoginPage.open();
      LoginPage.login(globalEmail, globalPassword);

      LoginPage.confirmLogin.isVisible();

      HomePage.logout();

      LoginPage.loginButton.getText().should.be.equal('Log in');

    

    
      const mail = 'some@email.com';
      ForgotPasswordPage.open();
      ForgotPasswordPage.enterEmail(mail);
      ForgotPasswordPage.resetButtonClick();

      ForgotPasswordPage.confirm.getText().should.contain('A link to create a '
         + 'new password has been emailed to ' + mail + '.');

