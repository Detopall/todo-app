const Todo = require("../models/ToDo");

exports.findTodo = async (req, res) => {
	try {
		let todos = await Todo.find().lean();
		res.render('todo', {
			todos: todos
		});
		console.log(todos);
	} catch (err){
		console.error(err);
	}
}

exports.createTodo = async (req, res) => {
	const todo = new Todo(req.body);
	await todo.save();
	res.send({data: todo});
}


exports.finishTodo = async (req, res) => {
	const id = req.params.id;
	const modificationResult = await Todo.updateOne({'_id': id},
	{$set :{'completed': true}});
	res.send({data: modificationResult});
}


exports.changeContents = async (req, res) => {
	const id = req.params.id;
	const title = req.body.title;
	const text = req.body.text;

	if (alreadyFinished()){
		res.send({error: "The todo has already been changed"});
	}
	
	const modificationResult = await Todo.updateOne(
		{'_id': id},
		{
			$set: {
				'title': title, 'text': text
			}});

	res.send({data: modificationResult});
}

async function alreadyFinished(){
	let todoToChange = await Todo.find({'_id': id}).lean();
	return todoToChange.completed;
}
