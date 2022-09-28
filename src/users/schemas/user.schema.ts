import mongoose, * as mogoose from 'mongoose';
export default new mogoose.Schema({
    id:String,
    name:String,
    email:String,
    password:String,
    
},{versionKey:false})