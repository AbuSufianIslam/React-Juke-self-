const Sequelize = require('sequelize');
const db = require('./db');

const Song = db.define('song', {
	//     Has a name column with a type of STRING
	// name should be required
	// Has an audioUrl column with a type of STRING
	// Has a genre column with a type of STRING
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	audioUrl: {
		type: Sequelize.STRING
	},
	genre: {
		type: Sequelize.STRING
	}
});

module.exports = Song;
