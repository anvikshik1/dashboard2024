const express = require('express');
const authControl = require('../controller/auth-controller')
const {signUpScheema, loginScheema} = require('../validator/auth-validator');
const validate = require('../middlewares/validate-middleware');
const router = express.Router(); 


router.route("/").get(authControl.home);
router.route("/register").post(validate(signUpScheema),authControl.register);
router.route("/login").post(validate(loginScheema),authControl.login);

module.exports = router;