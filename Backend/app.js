// imports
const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser')
const app = express();

// Exporting Routes
const userRoute = require("./routes/user")
const carRoute = require("./routes/car")
const bookingRoute = require("./routes/booking")



// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
})



// Middlewares
app.use(bodyParser.json());


// Using Route

app.use("/api",userRoute);
app.use("/api",carRoute);
app.use("/api",bookingRoute);






// PORT
const port = process.env.PORT || 8000;

// Starting Server
app.listen(port,() => {
    console.log(`app is running at ${port}`);
});
