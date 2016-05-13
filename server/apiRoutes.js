var mainController = require('./db/mainController')
var bcrypt = require('bcrypt');
var session = require('express-session')

module.exports = function (app, express) {

  app.post('/login', function (req, res) {
    mainController.findUserByPrimaryEmail(req.body.primaryEmail, function (err, response) {
      if(err){
        console.log("Error in login router finding user by primaryEmail", err)
      } else {
        if(response.length){
          var userData = response[0]
          //will be a bcrypt check
          bcrypt.compare(req.body.password, userData.password, function(err, bcryptResponse){
            delete userData["password"]
            if(err){
              console.log("Error in login comparing passwords")
            } else {
              if(bcryptResponse){
 res.send({loggedin : true, userData: userData})                //create the session
                // req.login(userData, function(err){
                //   if(err){
                //     console.log("Error logging in at login", err)
                //   } else {
                //     req.session.passport.user = userData.id
                //     req.session.lastLocation = ["Homepage", new Date]
                //     res.send({loggedin : true, userData: userData})
                //   }
                // })
              } else {
                res.send({loggedin : false, message: "incorrect password"})
              }
            }
          })
        } else {
          res.send({loggedin : false, message: "primaryEmail not found"})
        }
      }
    })  
  })

  app.post('/createUser', function (req, res) {
  mainController.findUserByPrimaryEmail(req.body.primaryEmail, function (err, response){
    if(err){
      console.log("Error in router finding user by primaryEmail")
    } else {
      if(response.length){
        res.send({created:false, message: "I'm sorry that Email already has an account"})
      } else {
        bcrypt.hash(req.body.password, 13, function(err, hash) {
          if(err){
            console.log("Error hashing password", err)
          } else {
            req.body.password = hash
            mainController.addUser(req.body, function (err, response){
              if(err){
                console.log("Error in router creating new user", req.body)
              } else {
                res.send({created:true})
              }
            })
          }
        })
      }
    }

    // res.send({created:false, message: "Error creating user. Please try again"})
  })
})
}