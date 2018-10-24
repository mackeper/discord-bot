const sqlite3 = require('sqlite3').verbose();

class Database {
	constructor() {
		console.log("Database constructor");
		this.db = new sqlite3.Database('./data/db.sqlite3',sqlite3.OPEN_READWRITE, (err) => {
			if(err) {
				this.init();
			}	
			console.log('Connected to the in-memory SQlite database.');
		});
	}
	
	init() {
		console.log("Init a new database");
		this.db = new sqlite3.Database('./data/db.sqlite3', (err) => {
			if(err) {
				return console.error(err.message);
			}	
			console.log('Connected to the in-memory SQlite database.');
		});

		let sql = 'CREATE TABLE users (id integer PRIMARY KEY, cash integer)';
		this.db.serialize(() => {
			this.db.run(sql)
				.run('INSERT INTO users VALUES(1, 100)')
				.each('SELECT * FROM users', (err, row) => {
					if(err) {
						throw err;
					}
					console.log(row);
				});
		});
	}

	close() {
		this.db.close();
	}	
}

module.exports = Database;
