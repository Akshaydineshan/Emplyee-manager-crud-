const mongoose =require("mongoose")

let eSchema=mongoose.Schema({
    name:String,
    position:String,
    department:String,
})

const Employee=mongoose.model('Employee',eSchema);

module.exports={Employee}
