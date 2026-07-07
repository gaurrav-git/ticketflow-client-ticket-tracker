const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();

//Global Middleware


// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to TicketFlow API 🚀",
        version: "v0.2.0"
    });
});


app.use("/api/auth", authRoutes);


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

module.exports = app;