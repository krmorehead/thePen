var mysql = require('mysql');
var _ = require('underscore');

var connection = mysql.createConnection({
  user: "root",
  password: "nutterButtSquash",
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

//Takes a AuthorObj with at least firstName1, firstName2, location, and password
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

//<h3>getAuthor</h3>

//Finds a Author based on the displayUrl and password inserted
//returns an array of obj's (should only be one) usefull for login
var getAuthor = function(displayUrl, password, callback){
  connection.query('SELECT * FROM Authors where displayUrl=? and password=?', [displayUrl, password], function(err, rows){
    if(err){
      console.log("Error finding Author by displayUrl :", err)
      callback(err, null);
    } else{
      callback(null, rows[0]);
    }
  })
}

var getAuthorByDisplayUrl = function(displayUrl, callback){
  connection.query('SELECT displayName, profile_photo, displayUrl FROM Authors where displayUrl=?', [displayUrl], function(err, rows){
    if(err){
      console.log("Error in controllers.js finding Author by displayUrl :", err)
      callback(err, null);
    } else{
      delete rows[0].password;
      callback(null, rows[0]);
    }
  })
}
//<h3>getAuthorByPartial</h3>

//Finds a Author by providing partial displayUrl information. Used in search
var getAuthorsByPartial = function(string, callback){
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

//<h3>getAuthorById</h3>

//Finds the Author by id, useful for buy/sell events
//returns an array of obj's (should only be one)
var getAuthorPages = function(displayUrl, callback){
  connection.query('SELECT * FROM pages WHERE displayUrl=?', [displayUrl], function (err, rows){
    if (err) {
      console.log("Error finding Author pages by displayUrl :", err)
      callback(err,null);
    } else {
      callback(null,rows);
    }
  })
}


var addAuthorPage = function (displayUrl, newAuthorPage, callback) {
  var pageEntry = {
    displayUrl: displayUrl,
    slug: newAuthorPage.slug,
  }

  pageEntry.pageData = JSON.stringify(newAuthorPage) || '{}'
  connection.query('Insert Into Pages Set ?', pageEntry, function (err, result) {
    if (err) {
      console.log("Error inserting Author page:", err)
      callback(err,null);
    } else {
      console.log("Error inserting Author page:", err)
      callback(null,result);
    }    
  })
}


//<h3>getAuthorByFbKey</h3>

//Finds the Author by facebookKey, useful for buy/sell events
//returns an array of obj's (should only be one)
var getAuthorByFbKey = function(fbKey, callback){
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

//<h3>updateAuthor</h3>

//Even though this leverages two controller methods since it is
//essentially just an update it is here.
//newAuthorObj must have Author_displayUrl and the new properties
var updateAuthor = function(newAuthorObj, callback){
  var displayUrl = newAuthorObj.displayUrl
  getAuthor(displayUrl, function(err, AuthorObj){
    AuthorObj = AuthorObj[0]
    _.extend(AuthorObj, newAuthorObj)
    connection.query('UPDATE Authors SET ? Where displayUrl = ?',[AuthorObj, displayUrl], function (err, result) {
        if (err){
          console.log("Error updating Author # " + displayUrl)
          callback(err, null)
        } else{
          console.log('Updated Author ' + displayUrl);
          callback(null, AuthorObj);
        }
      }
    );
  })
}

//<h3>deleteAuthor</h3>
//Deletes a Author specified by a AuthorId
var deleteAuthor = function(AuthorId, callback){
  connection.query('DELETE FROM Authors WHERE displayUrl = ?',AuthorId, function (err, response) {
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
  getAuthor: getAuthor,
  addAuthorPage: addAuthorPage,
  updateAuthor: updateAuthor,
  deleteAuthor: deleteAuthor,
  getAuthorByDisplayUrl : getAuthorByDisplayUrl
};
