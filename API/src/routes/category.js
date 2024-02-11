const express = require('express')
const router = express.Router()
const { getAllCategories, getCategoryById } = require('../controllers/categoryController')


router.get('/allCategories', getAllCategories)
router.get('/category/:id', getCategoryById)

module.exports = router