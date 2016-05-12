var session = require('express-session')


var setup = function (app, express) {  
  //setup the session manager
  app.use(session({secret: "abstractedChalupas", cookie: {}, resave: false, saveUninitialized: false }));

}

module.exports = {
  setup:setup
}