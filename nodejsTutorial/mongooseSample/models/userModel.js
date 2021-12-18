const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const webUserSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  address:String,
  password: String,
  isActive: Boolean,
  addDate: { type: Date, default: Date.now },
});
const webUser = mongoose.model('WebUser', webUserSchema );

module.exports={
  webUser
};
