const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const app = express();

app.use(cors());
connectDB();

const PORT = process.env.PORT || 5000;
//Middleware to parse body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//defining the routes
app.use("/api/v1/events", require("./Routes/api/events"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
