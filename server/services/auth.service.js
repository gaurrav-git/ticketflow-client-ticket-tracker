const { v4: uuidv4 } = require("uuid");
const userRepository = require("../repositories/user.repository");
const passwordUtil = require("../utils/password");
const jwtUtil = require("../utils/jwt");
const ApiError = require("../utils/apiError");

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

const loginUser = async (credentials) => {

    const user = await userRepository.findUserForLogin(
        credentials.email
    );
    if (!user) {
    throw new ApiError(
        401,
        "Invalid email or password."
    );
}
    const isPasswordValid =
    await passwordUtil.comparePassword(
        credentials.password,
        user.password_hash
    );

    if (!isPasswordValid) {
    throw new ApiError(
        401,
        "Invalid email or password."
    );
}

    const token = jwtUtil.generateToken({
    id: user.id,
    uuid: user.uuid,
    roleId: user.role_id
});

    return {
    user: {
        id: user.id,
        uuid: user.uuid,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        roleId: user.role_id
    },
    token
    };
};

module.exports = {
    registerUser,
    loginUser
};