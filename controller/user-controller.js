const User = require("../models/User");
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
	if (await usernameAlreadyExists(req)) return;
	const user = new User(req.body);
	await user.save();
	res.render("index", {user: user});
}

async function usernameAlreadyExists(req){
	const username = req.body.username;
	const users = await User.find({"username": username}).lean();
	return users.length >= 1;
}

exports.loginUser = async (req, res) => {
	if (!await usernameAlreadyExists(req)) return;
	if (!await validPassword(req)) return;
	console.log(`${req.body.username} is logged in`);
	res.render("index");
}

async function validPassword(req){
	const user = await User.find({"username": req.body.username}).lean();
	return bcrypt.compareSync(req.body.password, user[0].password);
}


