const express = require('express')
const { createPost, getAllPosts, getPostById, deletePost, updatePost } = require('../controllers/blogController')
const { authenticate, isAllowedToCreateArticles } = require('../middlewares/authentication')
const router = express.Router()

router.post('/create', authenticate, isAllowedToCreateArticles, createPost)
router.put('/update/:id', authenticate, isAllowedToCreateArticles, updatePost)
router.delete('/delete/:id', authenticate, isAllowedToCreateArticles, deletePost)
router.get("/allposts", getAllPosts)
router.get("/post/:id", getPostById)

module.exports = router