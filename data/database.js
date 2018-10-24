const sqlite3 = require('sqlite3').verbose();

class Database {
	constructor() {
		console.log("Database constructor");
		this.db = new sqlite3.Database('./data/db.sqlite3', (err) => {
			if(err) {
				return console.error(err.message);
			}	
			console.log('Connected to the in-memory SQlite database.');
		});
	}
	
	close() {
		this.db.close();
	}	
}

module.exports = Database;
