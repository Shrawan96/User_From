const mongoose=require('mongoose');
 const Schma= new mongoose.Schema({
     employeeid:{
         type:String
     },
     employeename:{
        type:String
    },
    date:{
        type:String
    },
    email:{
        type:String
    },
    number:{
        type:String
    },
    password:{
        type:String
    },
    
    address:{
        type:String
    },
    city:{
        type:String
    },
    pincode:{
        type:String
    }

 },{ collection: 'Formdata' })
 const Res=mongoose.model("Schma",Schma);
 module.exports=Res;
 
