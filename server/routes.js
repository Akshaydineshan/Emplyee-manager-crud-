const express = require("express")
const router = express.Router()
const Employee = require("./employee.js")
const ObjectId =require("mongoose").Types.ObjectId


//update single user id
router.put('/:id',(req,res)=>{
    console.log(ObjectId)
       if(ObjectId.isValid(req.params.id)){
        let emp ={
            name:req.body.name,
            position:req.body.position,
            department:req.body.department

        }
          Employee.Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(err){
                console.log("error in get api  deleteid")
            }else{
                res.send(doc);
            }
          })
    
       }else{
        console.log("not found")
         res.status(400).send("not found")
       }
    })



//deletesingle user id
router.delete('/:id',(req,res)=>{
console.log(ObjectId)
   if(ObjectId.isValid(req.params.id)){
      Employee.Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(err){
            console.log("error in get api  deleteid")
        }else{
            res.send(doc);
        }
      })

   }else{
    console.log("not found")
     res.status(400).send("not found")
   }
})

 

//get single user id
router.get('/:id',(req,res)=>{
console.log(ObjectId)
   if(ObjectId.isValid(req.params.id)){
      Employee.Employee.findById(req.params.id,(err,doc)=>{
        if(err){
            console.log("error in get api id")
        }else{
            res.send(doc);
        }
      })

   }else{
    res.send("not found")
   }
})




//get
router.get('/',(req,res)=>{
     Employee.Employee.find((err,doc)=>{
        if(err){
            console.log("error in get api")
        }else{
            res.send(doc);
        }
     })
})


//post
router.post('/', function (req, res) {
    console.log("snjfn")
    const emp = new Employee.Employee({
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,

    })
    emp.save((err, doc) => {
        if (err) {
            console.log("error");
        } else {
            res.json(doc)
        }
    })
})

module.exports = { router }