var express = require("express");
var router = express.Router();
const Categorycontroller = require("../controllers/category")

router.post("/",Categorycontroller.createCategory);
router.get("/",Categorycontroller.getCategory);

module.exports = router;