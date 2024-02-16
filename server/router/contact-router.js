const express = require('express');
// const validate = require('../middlewares/validate-middleware');
const { contactForm } = require('../controller/contact-controller');
const router = express.Router(); 

router.route("/contact").post(contactForm);

module.exports = router;