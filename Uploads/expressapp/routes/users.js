var express = require('express');
var router = express.Router();
const Usercontroller = require("../controllers/users")
router.get('/',Usercontroller.getUsers );
router.post("/",Usercontroller.createUser)
router.post('/login',Usercontroller.login)

module.exports = router;
