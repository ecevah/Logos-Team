const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const psycModel = require("../psychologist/psychologistModel");

const ClientSchema = new Schema({
    name: {
        type: String,
        maxLength: 60,
        minLength: 2,
        required: true
    },
    surName: {
        type: String,
        maxLength: 60,
        minLength: 2,
        required: true
    },
    pass: {
        type: String,
        maxLength: 60,
        minLength: 5,
        required: true
    },
    eMail: {
        type: String,
        maxLength: 100,
        minLength: 5,
        required: true,
        unique: true
    },
   dateOfBirth:{
        type: Date,
        require: true,//true olarak değişecek
        default: Date.now
    },
    city: {
        type: String,
        require: true
    },
    county: {
        type: String,
        require:true
    },
    job: {
        type: String,
        require: true
    },
    about: {
        type: String
    },
    createAt: {
        type:Date,
        default: Date.now
    },
    updateAt: {
        type:Date
    },
    sex:{
        type:String,
        require: true 
    },
    favorites:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:psycModel}
    ],
    image:{
        type:String
    }
});


module.exports = mongoose.model('client', ClientSchema);