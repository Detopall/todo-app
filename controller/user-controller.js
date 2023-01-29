const User = require("../models/User");


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

}


