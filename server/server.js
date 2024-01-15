const express = require('express');
const app = express();
const router = require('./router/auth-router');
const Connectdb = require('./utils/db');
require('dotenv').config();

app.use(express.json());
app.use("/api/auth",router);

Connectdb().then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`server port running at ${PORT}`);
    })
})
