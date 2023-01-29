const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});


UserSchema.pre("save", async function (next) {
	try {
		const salt = bcrypt.genSaltSync(12);
		const hashedPwd = await bcrypt.hash(this.password, salt);
		this.password = hashedPwd;
		next();
	} catch (err) {
		next(err);
	}
});




module.exports = mongoose.model('User', UserSchema);