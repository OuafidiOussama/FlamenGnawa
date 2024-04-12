require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
const errorHandler = require("./middlewares/error");

const connectDB = require("./config/db");
connectDB();

const prodOrigins = [process.env.ORIGIN_1, process.env.ORIGIN_2]
const devOrigin = [process.env.DEV_ORIGIN]
const allowedOrigins = process.env.NODE_ENV === 'production' ? prodOrigins : devOrigin

app.use(express.json({ limit: "5mb" }));
app.use(cors({
    origin:(origin, callback)=>{
        if(allowedOrigins.includes(origin)){
            console.log(origin, allowedOrigins);
            callback(null, true)
        } else{
            callback(new Error('not Allowed By CORS'))
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));
app.use(errorHandler);

const indexRoute = require("./routes");
app.use("/api", indexRoute);

module.exports = app;
