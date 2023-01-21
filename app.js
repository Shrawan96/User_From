const express =require('express');
const async = require('hbs/lib/async');
require("./conn")
 const Register=require("./register");
const port= process.env.port || 5000;
const path =require('path');
 const app=express();
 const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ankitdata",{useNewUrlParser: true,
useUnifiedTopology: true,
}).then(()=>{
    console.log("mongodb connected")
}).catch((e)=>{
    console.log(e);
})
const staticpath = path.join(__dirname,"../public");
console.log(staticpath);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app.use(express.static(staticpath));
app.set("view engine","hbs");
 app.get('/',(req,res)=>{
     res.render("index")
 });
 app.get('/login',(req,res)=>{
    res.render("login")
});
 app.post("/register",async(req,res)=>{
    try {
       const data=new Register([{
        employeeid:req.body.employeeid,
        employeename:req.body.employeename,
        date:req.body.date,
        email:req.body.email,
        number:req.body.number,
        password: req.body.password,
        address:req.body.address,
        city:req.body.city,
        pincode:req.body.pincode
       }])
     const registered=await data.save();
     res.status(201).render("register");
        
    } catch (error) {
        res.status(400).send(error)
    }
     })
     app.post("/login",async (req,res)=>{
        try{
            const email=req.body.email;
            const password=req.body.password;
            const usermail=await Register.findOne({email:email});
            if(usermail.password===password){
                res.status(201).render("index");
            
            }
            else{
                res.send("invaild");
            }
        }
        catch(e){
            res.status(400).send("invaild");
        }
     })
app.listen(port,()=>{
    console.log("connected at 5000");
})