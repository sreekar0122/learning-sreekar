var express = require("express");
var router = express.Router();
const Authorcontroller = require("../controllers/authors")

router.post("/",Authorcontroller.createAuthor);
router.get('/',Authorcontroller.getAuthors);
router.delete("/:id",Authorcontroller.delAuthors);
router.put("/:id",Authorcontroller.putAuthors);
module.exports = router;