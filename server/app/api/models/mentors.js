const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema

const Schema = mongoose.Schema;

const MentorSchema = new Schema({
 name: {
  type: String,
  trim: true,
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 age:{
   type:Number,
   required:true
 },
 password: {
  type: String,
  trim: true,
  required: true
 },
 contactNumber:{
  type:String,
  trim:true,
  required:true
 },
 dateOfBirth:{
  type:Date,
  default:'2000-12-20'
 },
 available:{
     type:Boolean,
     default:true
 }
});

// hash user password before saving into database
MentorSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('Mentor', MentorSchema);
