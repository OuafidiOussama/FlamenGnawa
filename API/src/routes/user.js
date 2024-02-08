const express = require('express')
const router = express.Router()
const {register, login} = require('../controllers/userController')

router.post('/register', register)
router.post('/login', login)
router.get("/profil")
router.get('/logout')

module.exports = router