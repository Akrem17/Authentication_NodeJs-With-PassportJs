const mongoose =require('mongoose');


const userSchema=new mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    
    password: {
        type:String,
        required:true
    }

}, {
    timestamps: true
})
var User=mongoose.model('user',userSchema);
module.exports =User;