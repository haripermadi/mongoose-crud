const Customer = require('../models/customer')

module.exports = {
  getCustomer (req,res){
    Customer.find().exec().then(customers=>{
      if(customers){
        res.status(200).send({
          message:"customers found",
          customers
        })
      }else{
        res.status(400).send({
          message:"customer not found"
        })
      }
    })
  },
  addCustomer (req,res){
    console.log("ini reqbody====",req.body)
    Customer.create(req.body,(err,customer)=>{
      if(err){
        res.status(400).send({
          message:'error'
        })
      }else{
        res.status(201).send({
          message:'customer added',
          customer
        })
      }
    })
  },
  updateCustomer (req,res){
    // findOneAndUpdate(conditions, update, options, callback)
    Customer.findOneAndUpdate({_id:req.params.id},req.body,(err)=>{
      if(err){
        res.status(400).send({
          message:"customer not found"
        })
      }else{
        res.status(200).send({
          message:"data updated",
        })
      }
    })
  },
  deleteCustomer (req,res){
    Customer.remove({_id:req.params.id},(err)=>{
      if(err){
        res.status(400).send({
          message:"customer not found"
        })
      }else{
        res.status(200).send({
          message:"customer removed"
        })
      }
    })
  }
}