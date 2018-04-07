// 'use strict';
var pageElement = require('../helpers/pageElement.js');

var Page = require('./page');

console.log('this is the page im on',Page);

var LoginPage = Object.create(Page, {
   
   loginButton: pageElement('=Start a new lesson'),

   open: { value: function() {
      Page.open.call(this, '/login/home');
   } },

   loginClick: { value: function() {
      this.loginButton.then(function (k) {
         console.log(k);
         k.click();
      });
   } },

   login: { value: function(username, password) {
      this.username.setValue(username);
      this.password.setValue(password);
      this.loginClick();
      browser.waitForVisible('#ef');
   } }

});

module.exports = LoginPage
