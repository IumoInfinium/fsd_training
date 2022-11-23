const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login',  authController.signIn);
router.get('/logout',  authController.logout);

module.exports = router;