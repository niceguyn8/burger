// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb){
    connection.query('SELECT * FROM ' +tableInput+';', function(err,
      result){
      if(err) throw err;
      cb(result)
    })
  },

  update: function(tableName, id, cb){
    connection.query('UPDATE ' + tableName + ' SET devoured=true WHERE id='+id+';', function(err,result){
        if(err)throw err;
        cb(result);
      })
  },

  create: function(tableInput, val, cb){
    connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err,result){
    if(err)throw err;
    cb(result);
    })
  }
}

module.exports = orm;
