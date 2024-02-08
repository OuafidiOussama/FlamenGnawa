const express = require('express')
const { createPost, getAllPosts, getPostById } = require('../controllers/blogController')
const { authenticate, isAllowedToCreateArticles } = require('../middlewares/authentication')
const router = express.Router()

router.post('/create', authenticate, isAllowedToCreateArticles, createPost)
router.put('/update/:id')
router.delete('/delete/:id')
router.get("/allposts", getAllPosts)
router.get("/post/:id", getPostById)

module.exports = router