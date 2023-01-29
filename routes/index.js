const express = require("express");
const router = express.Router();
const ToDoController = require("../controller/todo-controller");
const UserController = require("../controller/user-controller");

//TODO ROUTES
router.get('/home', (req, res) => {res.render('index');});
router.get('/todo', ToDoController.findTodo);
router.post('/todo', ToDoController.createTodo);
router.delete('/todo/:id' ,ToDoController.removeTodo);
router.put('/todo/:id', ToDoController.finishTodo);
router.put('/todo/:id/change', ToDoController.changeContents);

//USER ROUTES
router.get('/', (req, res) => {res.render('auth');});
router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);
module.exports = router;