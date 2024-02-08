const express = require('express')
const { createPost } = require('../controllers/blogController')
const { authenticate, isAllowedToCreateArticles } = require('../middlewares/authentication')
const router = express.Router()

router.post('/create', authenticate, isAllowedToCreateArticles, createPost)
router.put('/update/:id')
router.delete('/delete/:id')
router.get("/allposts")
router.get("/post/:id")

module.exports = router