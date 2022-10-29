const express=require("express")
const app=express();
const cors =require('cors');
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}))
const mongoose=require("./db.js")
var router=require("./routes")
// var router = require('./routes.js')







// const port=process.env.PORT ||3000
app.listen(3000,()=>{
    console.log("creating port in 3000")
})





app.use('/employee',router.router);


