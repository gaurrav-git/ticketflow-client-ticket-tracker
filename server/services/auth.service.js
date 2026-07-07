const userRepository = require("../repositories/user.repository");

const registerUser = async (userData) => {

    const existingUser =
        await userRepository.findUserByEmail(userData.email);

    if (existingUser) {
        return {
            success: false,
            message: "Email already registered."
        };
    }

    return {
        success: true,
        message: "Email available.",
        data: userData
    };
};

module.exports = {
    registerUser
};