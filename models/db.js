const mongoose = require('mongoose');

var url = 'mongodb+srv://basavarajms03:basavarajms03@cluster0-luxlt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser : true}, (err) => {
   if(!err){
       console.log("MongoDB connection successfull");
   }else{
       throw err;
   }
});

