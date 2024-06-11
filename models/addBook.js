const mongoose = require("mongoose")
const schema =mongoose.Schema({

    "title":String,
    "category":String,
    "publishedYear":String,
    "author":String,
    "description":String,
    "distributer":String,
    "publisher":String,
    "price":String
    
})

let librarymodal =mongoose.model("addbooks",schema)
module.exports={librarymodal}