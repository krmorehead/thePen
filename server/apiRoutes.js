var mainController = require('./db/mainController')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

module.exports = function (app, express) {

    app.post('/login', function (req, res) {
        mainController.findAuthorByPrimaryEmail(req.body.primaryEmail, function (err, response) {
            if(err){
                console.log("Error in login router finding Author by primaryEmail", err)
            } else {
                if(response.length){
                    var authorData = response[0]
                    //will be a bcrypt check
                    bcrypt.compare(req.body.password, authorData.password, function(err, bcryptResponse){
                        delete authorData["password"]
                        if(err){
                            console.log("Error in login comparing passwords")
                        } else {
                            if(bcryptResponse){
                                var token = jwt.sign(authorData, 'supernova', {
                                    expiresIn: "1d"
                                });
                                res.send({loggedin: true,
                                                    token: token,
                                                    authorData: authorData})
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

    app.post('/createAuthor', function (req, res) {
    mainController.findAuthorByPrimaryEmail(req.body.primaryEmail, function (err, response){
        if(err){
            console.log("Error in router finding Author by primaryEmail")
        } else {
            if(response.length){
                res.send({created:false, message: "I'm sorry that Email already has an account"})
            } else {
                bcrypt.hash(req.body.password, 13, function(err, hash) {
                    if(err){
                        console.log("Error hashing password", err)
                    } else {
                        req.body.password = hash
                        mainController.addAuthor(req.body, function (err, response){
                            if(err){
                                console.log("Error in router creating new Author", req.body)
                            } else {
                                res.send({created:true})
                            }
                        })
                    }
                })
            }
        }

        // res.send({created:false, message: "Error creating Author. Please try again"})
    })
})
}