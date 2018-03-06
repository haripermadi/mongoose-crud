const Transaction = require('../models/transactions')
const moment = require ('moment')
module.exports = {
  getTransaction (req,res){
    Transaction.find()
    .populate('member')
    .populate('booklist')
    .exec()
    .then(transactions=>{
      if(transactions){
        res.status(200).send({
          message:"transactions found",
          transactions
        })
      }else{
        res.status(400).send({
          message:"transactions not found"
        })
      }
    })
  },
  addTrasaction (req,res){
    const random = Math.floor(Math.random()*10)
    const {member,days,in_date,fine,booklist} = req.body
    const transaction = new Transaction ()
    transaction.member = member
    transaction.days = days
    transaction.due_date = moment(transaction.out_date).add(days,'days')
    transaction.in_date = moment(transaction.due_date).add(random,'days')
    let diff = Math.ceil((transaction.in_date - transaction.due_date)/(1000*3600*24))
    transaction.fine = 1000 * (diff)
    transaction.booklist = booklist
    console.log(random,"==========rndom")
    
    transaction.save().then(data=>{
      res.status(200).send({
        message : "success",
        transaction : data
      })
    })
  },
  updateTransaction (req,res){
    // findOneAndUpdate(conditions, update, options, callback)
    Transaction.findOneAndUpdate({_id:req.params.id},req.body,(err)=>{
      if(err){
        res.status(400).send({
          message: "transaction not found"
        })
      }else{
        res.status(200).send({
          message:"data updated"
        })
      }
    })

  },
  deleteTransaction (req,res){
    Transaction.remove({_id:req.params.id},(err)=>{
      if(err){
        res.status(400).send({
          message:"id not found"
        })
      }else{
        res.status(200).send({
          message:"transaction deleted"
        })
      }
    })

  }
}