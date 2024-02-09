const express = require('express')
const { createPost, getAllPosts, getPostById, deletePost, updatePost, likePost, removeLike, addComment, deleteComment } = require('../controllers/blogController')
const { authenticate, isAllowedToCreateArticles, isPublisher } = require('../middlewares/authentication')
const router = express.Router()

router.get("/allposts", getAllPosts)
router.get("/post/:id", getPostById)    
router.post('/create', authenticate, isAllowedToCreateArticles, createPost)
router.put('/update/:id', authenticate, isAllowedToCreateArticles, updatePost)
router.delete('/delete/:id', authenticate, isAllowedToCreateArticles, deletePost)


router.patch('/like/:id', authenticate, likePost)
router.patch('/unlike/:id', authenticate, removeLike)


router.patch('/addComment/:id', authenticate, addComment)
router.patch('/deleteComment/:id', authenticate, isPublisher, deleteComment)


module.exports = router