

const errorMiddleware = (err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extrDetails = err.extrDetails || "Error from Backend";
    return res.status(status).json({message,extrDetails});
}

module.exports = errorMiddleware;