// Import's
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Exporting Routes
const userRoute = require("./routes/user")
const carRoute = require("./routes/car")
const bookingRoute = require("./routes/booking")
const authRoute = require("./routes/auth")




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
app.use(cookieParser());
app.use(cors());    



// Using Route

app.use("/api",userRoute);
app.use("/api",carRoute);
app.use("/api",bookingRoute);
app.use("/api",authRoute);






// PORT
const port = process.env.PORT || 8000;

// Starting Server
app.listen(port,() => {
    console.log(`app is running at ${port}`);
});
