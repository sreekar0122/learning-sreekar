var express = require("express");
var router = express.Router();
const Bookcontroller = require("../controllers/books");

router.post("/",Bookcontroller.createBook);
router.get("/",Bookcontroller.getBookswithAuthors);

module.exports = router;
