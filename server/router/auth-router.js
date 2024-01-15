const express = require('express');
const {home,register} = require('../controller/auth-controller')

const router = express.Router(); 

router.route("/").get(home);
router.route("/register").post(register);

module.exports = router;