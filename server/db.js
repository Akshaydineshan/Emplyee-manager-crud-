const mongoose =require("mongoose")



const mongoDB = "mongodb://127.0.0.1:27017/EmpManagement";
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("db connected successfully")},(error)=>
    {
        console.log("db connection failed")
    }
)
module.exports={mongoose}