const mongoose= require("mongoose");
const url = process.env.DB;
const db= mongoose.connect(url);
module.exports=db;
