const Book = require('../models/books')

module.exports = {
  getBooks:(req,res)=>{
    Book.find().exec().then(dataBooks=>{
      if(dataBooks){
        res.status(200).send({
          message:"books found",
          dataBooks
        })
      }else{
        res.status(500).send({
          message:'book not found'
        })
      } 
    })
  },
  addBooks:(req,res)=>{
    const book = new Book(req.body)
    book.save().then(book=>{
      if(book){
        res.status(201).send({
          message:"success add new book",
          book
        })
      }else{
        res.status(500).send({
          message:"error"
        })
      }
    })
  },
  updateBooks:(req,res)=>{
    let id = {
      _id:req.params.id
    }
    // findOneAndUpdate(conditions, update, options, callback)
    Book.findOneAndUpdate(id,req.body,{upsert:true},(err)=>{
      console.log('ini id====',id)
      console.log('ini reqbdy===',req.body)
      console.log("ini err===",err)
      if(err){
        res.status(500).send({
          message:"id not found"
        })
      }else{
        res.status(200).send({
          message:"data updated"
        })
      }
    })
    
  },
  deleteBooks:(req,res)=>{
    // console.log("==========id",req.params.id)
    Book.remove({_id:req.params.id},function(err){
      if(err){
        res.status(500).send({
          message:"book not found"
        })
      }else{
        res.status(200).send({
          message:"data removed"
        })
      }
    })
  }
}