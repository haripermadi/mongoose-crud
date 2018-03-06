const express = require('express');
const router = express.Router();

const {getCustomer,addCustomer,updateCustomer,deleteCustomer} = require('../controllers/customerController')


router.get('/',getCustomer)
router.post('/',addCustomer)
router.put('/:id',updateCustomer)
router.delete('/:id',deleteCustomer)


module.exports = router