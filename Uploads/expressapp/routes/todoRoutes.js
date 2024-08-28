const express = require('express');
const router = express.Router();
const Todocontroller = require("../controllers/todo")

router.post('/',Todocontroller.createTodo );
router.get('/', Todocontroller.getTodo);
router.get('/:id',Todocontroller.getTodobyId );
router.put('/:id',Todocontroller.putTodo);
router.delete('/:id', Todocontroller.delTodo);

module.exports = router;