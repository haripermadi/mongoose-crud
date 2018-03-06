const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name:String,
  memberid : String,
  address: String,
  zipcode: Number,
  phone: String,
  createdAt : {
    type: Date,
    default: Date.now
  }
})

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer