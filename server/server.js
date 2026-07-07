require("dotenv").config();

const app = require("./app");
const testConnection = require("./config/testConnection");

const PORT = process.env.PORT || 5000;

// Test MySQL Connection
testConnection();

// Start Express Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});