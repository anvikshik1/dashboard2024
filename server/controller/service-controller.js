
const Service = require("../models/service-model");

const services =async (req,res) => {
  try {
    const response = await Service.find();
    if(!response){
        res.status(404).json({msg: `No services found`})
        return;
    }
    res.status(200).json({response})
  } catch (error) {
    console.log(`Services: ${error}`);
  }
}

module.exports= services;