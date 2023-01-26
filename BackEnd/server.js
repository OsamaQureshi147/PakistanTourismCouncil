const express = require("express");
const app = express();
const cors = require("cors");
const eventRoutes = require("./src/events/routes");

app.use(cors());
const PORT = process.env.PORT || 4000;
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/v1/events", eventRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
