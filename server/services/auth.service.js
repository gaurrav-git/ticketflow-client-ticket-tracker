const { v4: uuidv4 } = require("uuid");

const userRepository = require("../repositories/user.repository");
const passwordUtil = require("../utils/password");

const registerUser = async (userData) => {

    const existingUser =
        await userRepository.findUserByEmail(userData.email);

    if (existingUser) {
        return {
            success: false,
            message: "Email already registered."
        };
    }

    const hashedPassword =
        await passwordUtil.hashPassword(userData.password);

    const newUser = {
        uuid: uuidv4(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        passwordHash: hashedPassword,
        roleId: 3
    };

    const userId =
        await userRepository.createUser(newUser);

    return {
        success: true,
        message: "User registered successfully.",
        data: {
            id: userId,
            uuid: newUser.uuid,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: "Client"
        }
    };
};

module.exports = {
    registerUser
};