const express = require('express');
const router = express.Router();

const {getBooks,addBooks,updateBooks,deleteBooks} = require('../controllers/bookController')


router.get('/',getBooks)
router.post('/',addBooks)
router.put('/:id',updateBooks)
router.delete('/:id',deleteBooks)


module.exports = router