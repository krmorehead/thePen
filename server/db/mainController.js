var mysql = require('mysql');
var _ = require('underscore');

var connection = mysql.createConnection({
  user: "root",
  password: "superNova",
  database: "thePenMainDb"
});

connection.connect(function(err){
  if(err){
    console.log("error connection to Main Db");
    return;
  }
  console.log('Connected to Main Db')
});

//<h2> Author database functions </h2>

//<h3>addAuthor</h3>

//Takes a AuthorObj with at least firstName1, firstName2, primaryEmail, location, and password
var addAuthor = function (AuthorObj, callback) {
  connection.query('INSERT INTO Authors SET ?', AuthorObj, function(err, res){
    if(err){
      console.log("error inserting into Authors", err)
      callback(err, null)
    } else{
      console.log("last inserted Id: ", res.insertId);
      callback(null, res.insertId)
    }
  })
}

//<h3>findAuthor</h3>

//Finds a Author based on the displayUrl and password inserted
//returns an array of obj's (should only be one) usefull for login
var findAuthor = function(displayUrl, password, callback){
  connection.query('SELECT * FROM Authors where displayUrl=? and password=?', [displayUrl, password], function(err, rows){
    if(err){
      console.log("Error finding Author by displayUrl :", err)
      callback(err, null);
    } else{
      callback(null, rows);
    }
  })
}

var findAuthorByPrimaryEmail = function(primaryEmail, callback){
  connection.query('SELECT * FROM Authors where primaryEmail=?', [primaryEmail], function(err, rows){
    if(err){
      console.log("Error in controllers.js finding Author by primaryEmail :", err)
      callback(err, null);
    } else{
      callback(null, rows);
    }
  })
}
//<h3>findAuthorByPartial</h3>

//Finds a Author by providing partial displayUrl information. Used in search
var findAuthorsByPartial = function(string, callback){
  string+= "%"
  connection.query('SELECT * FROM Authors n displayUrl LIKE ?', string, function(err, rows){
    // just do callback(err, Author)
    if(err){
      console.log("Error finding Author by partial :", err)
      callback(err, null);
    } else{
      callback(null, rows);
    }
  })
}

//<h3>findAuthorById</h3>

//Finds the Author by id, useful for buy/sell events
//returns an array of obj's (should only be one)
var findAuthorById = function(AuthorId, callback){
  connection.query('SELECT * FROM Authors WHERE id=?', [AuthorId], function(err, rows){
    if(err){
      console.log("Error finding Author by id :", err)
      callback(err,null);
    } else {
      callback(null,rows);
    }
  })
}

//<h3>findAuthorByFbKey</h3>

//Finds the Author by facebookKey, useful for buy/sell events
//returns an array of obj's (should only be one)
var findAuthorByFbKey = function(fbKey, callback){
  connection.query('SELECT * FROM Authors WHERE facebookKey=?', [fbKey], function(err, rows){
    if(err){
      console.log("Error finding Author by facebookKey :", err)
      callback(err,null);
    } else {
      callback(null,rows);
    }
  })
}

//<h3>countAuthors</h3>

//Returns a count of the number of Authors in the Db
var countAuthors = function(callback){
  connection.query('select count(*) from Authors', function(err, count){
    if(err){
      console.log("Error counting Authors :", err)
      callback(err, null)
    } else{
      // Response is an array of objects with the "count(*)" key
      // since we are actually doing the wildcard count that will be our key
      callback(null, count[0]['count(*)'])
    }
  })
}

//<h3>getAllAuthors</h3>

//Returns an array of all Authors, can be used for populating
var getAllAuthors = function(callback){
  connection.query('select * from Authors', function(err, Authors){
    if(err){
      console.log("Error collecting Authors :", err)
      callback(err, null)
    } else{
      // Response is an array of objects with the "count(*)" key
      // since we are actually doing the wildcard count that will be our key
      callback(null, Authors)
    }
  })
}

//<h3>getTopAuthors</h3>

// Returns array of top n Authors, ranked by current score
var getTopAuthors = function(limit, callback) {
  connection.query('SELECT * FROM Authors ORDER BY currentScore DESC LIMIT ?',limit, function(err, res) {
    if (err) {
      console.log('Error finding all Authors sorted by current score');
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

//<h3>updateAuthor</h3>

//Even though this leverages two controller methods since it is
//essentially just an update it is here.
//newAuthorObj must have Author_id and the new properties
var updateAuthor = function(newAuthorObj, callback){
  var Author_id = newAuthorObj.id
  findAuthorById(Author_id, function(err, AuthorObj){
    AuthorObj = AuthorObj[0]
    _.extend(AuthorObj, newAuthorObj)
    connection.query('UPDATE Authors SET ? Where ID = ?',[AuthorObj, Author_id], function (err, result) {
        if (err){
          console.log("Error updating Author # " + Author_id)
          callback(err, null)
        } else{
          console.log('Updated Author ' + Author_id);
          callback(null, AuthorObj);
        }
      }
    );
  })
}

//<h3>updateKarma</h3>

//Updates the karma of a specified Author this is kept as a
//seperate function because it utilized the difference rather
//than just overwriting the property, this leads to fewer
//db interactions. It CAN accept a negative value for karmaChange
var updateKarma = function(AuthorId, karmaChange, callback){
  connection.query('UPDATE Authors SET karma = karma +? Where ID = ?',[karmaChange, AuthorId], function (err, result) {
      if (err){
        console.log("Error updating Karma of AuthorId " + AuthorId)
        callback(err, null)
      } else{
        console.log('Changed Author ' + AuthorId + '\'s karma by ' + karmaChange);
        callback(null, AuthorId);
      }
    }
  );
}

//<h3>deleteAuthor</h3>
//Deletes a Author specified by a AuthorId
var deleteAuthor = function(AuthorId, callback){
  connection.query('DELETE FROM Authors WHERE id = ?',AuthorId, function (err, response) {
    if (err) {
      console.log("error deleting Author " + AuthorId, err)
      callback(err, null)
    }else{
      console.log('Deleted Author number ' + AuthorId);
      callback(null, response);
    }
  });
}



module.exports = {
  connection: connection,
  //Author methods
  addAuthor: addAuthor,
  findAuthor: findAuthor,
  findAuthorById: findAuthorById,
  updateAuthor: updateAuthor,
  deleteAuthor: deleteAuthor,
  findAuthorByPrimaryEmail : findAuthorByPrimaryEmail
};
