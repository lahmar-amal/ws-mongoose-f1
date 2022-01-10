// 1
const express = require("express");
const connectDB = require("./config/connectDB");
const routes = require("./routes/personRoute");
// 2
const app = express();
//7
app.use(express.json());

// 3
require("dotenv").config();
//6
connectDB();

//8
app.use("/api/person", routes);

//4
const PORT = process.env.PORT;
//5
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`this server is running on ${PORT}`);
});
