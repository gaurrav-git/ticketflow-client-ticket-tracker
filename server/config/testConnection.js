const pool = require("./database");

async function testConnection() {
    try {
        const connection = await pool.getConnection();

        console.log("✅ Connected to MySQL Database");

        connection.release();
    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error.message);
    }
}

module.exports = testConnection;