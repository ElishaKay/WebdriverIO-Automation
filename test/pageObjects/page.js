'use strict';
var webdriverio = require('webdriverio');

function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url('http://www.isradrive.com/' + path)
}

module.exports = new Page();
