const Author = require("../models/authors");
const auth = require("../middlewares/auth")
const {body, validationResult } = require("express-validator");
exports.createAuthor = [
    body("first_name")
        .isLength({min:3})
        .withMessage("Min length should be 3"),
    body("last_name")
        .isLength({max:20})
        .withMessage("max length can't be exceed 20"),
async function (req,res,next) {
const errors  = validationResult(req)
if(errors.isEmpty()){
    let{first_name,last_name,dob,dod} = req.body;
    let authorOb = new Author({first_name,last_name,dob,dod})
    let result = await authorOb.save();
    res.json(result);
} else {
    res.send(errors);
}
},];
exports.getAuthors = [ async function (req,res,next) {
    let results = await Author.find();
    res.json(results);
}];
exports.putAuthors = async function(req,res,next){
    let{first_name,last_name,dob,dod} = req.body;
    // let authorOb = new Author({first_name});
    let result = await Author.findByIdAndUpdate(req.params.id,{first_name,last_name,dob,dod});
    res.json(result);
};
exports.delAuthors = async function (req,res,next) {
    let idDelete = req.params.id;
    let result = await Author.findByIdAndDelete(idDelete);
    res.json(result);
};