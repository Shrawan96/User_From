const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ankitdata",{useNewUrlParser: true,
useUnifiedTopology: true,
}).then(()=>{
    console.log("mongodb connected")
}).catch((e)=>{
    console.log(e);
})