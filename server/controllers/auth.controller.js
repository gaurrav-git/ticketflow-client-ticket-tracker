const authService = require("../services/auth.service");

const registerUser = async (req, res, next) => {
    try {
        const result = await authService.registerUser(req.body);

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser
};