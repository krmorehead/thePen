var mainController = require('./db/mainController')
var bcrypt = require('bcrypt');

module.exports = function (app, express) {
  app.post("/login", function(req, res){
  })  

  app.post('/createUser', function (req, res) {
  mainController.findUserByPrimaryEmail(req.body.primaryEmail, function (err, response){
    if(err){
      console.log("Error in router finding user by primaryEmail")
    } else {
      if(response.length){
        res.send({created:false, message: "I'm sorry that User Name is already taken"})
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

    res.send({created:false, message: "Error creating user. Please try again"})
  })
})
}