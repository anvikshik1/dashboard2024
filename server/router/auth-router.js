const express = require('express');
const authControl = require('../controller/auth-controller')

const router = express.Router(); 

router.route("/").get(authControl.home);
router.route("/register").post(authControl.register);

module.exports = router;