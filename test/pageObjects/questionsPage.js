// 'use strict';
var pageElement = require('../helpers/pageElement.js');

var Page = require('./page');

console.log('this is the page im on',Page);

var QuestionsPage = Object.create(Page, {
   
   openQuestionButton: pageElement('.jcepopup'),

   open: { value: function() {
      Page.open.call(this, '/login/home');
   } },

   questionClick: { value: function() {
      this.openQuestionButton.then(function (k) {
         console.log('this is the openQuestionButton',k);
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

module.exports = QuestionsPage
