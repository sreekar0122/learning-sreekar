const Book = require("../models/books");
exports.createBook = async function(req,res,next){
    let title = req.body.title;
    let author = req.body.author;
    let summary = req.body.summary;
    let isbn = req.body.isbn;
    let category = req.body.category;
    var bookOb = new Book({
        title,author,summary,isbn,category,
    });
    try{
        let result = await bookOb.save();
        console.log(result)
        res.json(result);
    } catch{
        res.json(error)
    }
};
exports.getBookswithAuthors = async function(req,res){
    try{
    let result = await Book.find()
    .populate("author").populate("category")
    .exec();
    res.json(result);
    }catch (error){
        res.json(error);
    }
};