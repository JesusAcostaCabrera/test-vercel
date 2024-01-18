// Import packages
const express = require("express");
const subject = require("./routes/subject");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/subject", subject);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));