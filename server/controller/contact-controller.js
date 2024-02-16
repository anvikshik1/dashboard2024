const Contact = require("../models/contact-models");

const contactForm = async (req,res) => {
    try {
        const response = req.body;
        const result = await Contact.create(response);
        res.status(201).send({result});
    } catch (error) {
        console.log(error);
        res.status(201).send({msg:"Message not delivered"});
    }
}
module.exports = {contactForm}