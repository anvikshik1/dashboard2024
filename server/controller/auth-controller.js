
const home = async (req,res) => {
    try {
        res.status(200).send('welcome to new router');
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res) => {
    try {
        res.status(200).send({message:req.body})
    } catch (error) {
        res.status(404).send({msg:'page not found'})
    }
}

module.exports = {home, register};