const express = require('express')
const router = express.Router()
const {register} = require('../controllers/userController')

router.post('/register', register)
router.post('/login')
router.get("/profil")
router.get('/logout')

module.exports = router