const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
//schema (structure of data)
const data = new Schema({
  name:{
      type: String,
      required: true
  },
  email:{
      type: String,
      required: true,
      unique: true
  },
  password:{
      type: String,
      required: true
  }
});

const MyModel = mongoose.model('register' , data);

module.exports = MyModel;