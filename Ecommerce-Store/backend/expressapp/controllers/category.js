const Category = require("../models/category");
exports.createCategory = function(req,res,next){
    let name = req.body.name;
    let description = req.body.description;
    var categoryOb = new Category({
        name,description
    });
    try{
        let result = categoryOb.save();
        res.json(result);
    } catch{
        res.json(error)
    }
};

exports.getCategory = async function(req,res){
    let result = await Category.find()
    res.json(result)
};

