const express = require("express");
const router = express.Router();
const ToDoController = require("../controller/todo-controller");

router.get('/', (req, res) => {res.render('index');});
router.get('/todo', ToDoController.findTodo);
router.post('/todo', ToDoController.createTodo);
router.put('/todo/:id', ToDoController.finishTodo);

module.exports = router;