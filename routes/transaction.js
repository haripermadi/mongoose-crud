const express = require('express');
const router = express.Router();

const {getTransaction,addTrasaction,updateTransaction,deleteTransaction} = require('../controllers/transactionController')


router.get('/',getTransaction)
router.post('/',addTrasaction)
router.put('/:id',updateTransaction)
router.delete('/:id',deleteTransaction)

module.exports = router