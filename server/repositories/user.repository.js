const pool = require("../config/database");

const findUserByEmail = async (email) => {
    const [rows] = await pool.execute(
        `
        SELECT
            id,
            uuid,
            first_name,
            last_name,
            email,
            role_id
        FROM users
        WHERE email = ?
        `,
        [email]
    );

    return rows[0];
};

const createUser = async (user) => {

    const [result] = await pool.execute(
        `
        INSERT INTO users
        (
            uuid,
            first_name,
            last_name,
            email,
            password_hash,
            role_id
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
            user.uuid,
            user.firstName,
            user.lastName,
            user.email,
            user.passwordHash,
            user.roleId
        ]
    );

    return result.insertId;
};

module.exports = {
    findUserByEmail,
    createUser
};