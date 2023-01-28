const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	user: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Todo', TodoSchema);