const express = require('express');
const app = express();
const authRoute = require('./router/auth-router');
const Connectdb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require('./router/contact-router');
require('dotenv').config();


app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use(errorMiddleware);

Connectdb().then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`server port running at ${PORT}`);
    })
})
