const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home route
app.get("/", (req, res) => {
    const data = {
        title: "Welcome to My Dynamic Website!",
        message: "This page is dynamically rendered using Node.js + EJS.",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    };
    res.render("index", data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

