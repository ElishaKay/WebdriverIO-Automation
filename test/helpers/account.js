var lodash = require('lodash');


const defaults = {
   email: globalEmail,
   password: globalPassword
};

module.exports = (options) => {
   const opts = _.assign({}, defaults, options);

      return {

         login: () => {
            browser
               .url('/login/home')
               .waitForVisible('.accountform-btn');

             browser
               .setValue('#inputEmailHandle', opts.email)
               .setValue('#inputPassword', opts.password)
               .click('.accountform-btn')
               .waitForVisible('#ef'); //span containing the 'log out' option
         },

         logout: () => {
            browser
               .url('/logout')
               .waitForVisible('button=Log in');
         },

         forgotPassword: () => {
            browser
               .url('/reset')
               .waitForVisible('#email');

            browser
               .setValue('#email', opts.email)
               .click('.accountform-btn');
         }
   };
};
