// Import MySQL connection.
var connection = require("../config/connection.js");

function ORM(tableName) {
	this.table = tableName
}


ORM.prototype = {
	selectAll: function(cb) {
		var query = 'SELECT * FROM ' + this.table + ';'
		connection.query(query, function(err, result) {
      		if (err) {
      			console.log(err)
        		throw err;
      		}
      		cb(result);
    	});
	},
	insertOne: function(cols, vals) {
		var questionMarks = (new Array(vals.length)).fill('?')
		var query = 'INSERT INTO ' + this.table + ' (' + cols.join(', ') + ') ' + 
					'VALUES (' + questionMarks.join(', ') + ')';
		console.log(query)
	},
	updateOne: function() {
		var query = 'UPDATE ' + this.table
		console.log(query)
	}
}


// Export the orm object for the model (cat.js).
module.exports = ORM;