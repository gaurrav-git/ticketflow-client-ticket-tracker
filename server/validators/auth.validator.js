const { body, validationResult } = require("express-validator");

const registerValidation = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required.")
        .isLength({ min: 2, max: 50 })
        .withMessage("First name must be between 2 and 50 characters."),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required.")
        .isLength({ min: 2, max: 50 })
        .withMessage("Last name must be between 2 and 50 characters."),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Invalid email address."),

    body("password")
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({ min: 8 })
        .withMessage("Password must contain at least 8 characters.")
        .matches(/[A-Z]/)
        .withMessage("Password must contain one uppercase letter.")
        .matches(/[a-z]/)
        .withMessage("Password must contain one lowercase letter.")
        .matches(/[0-9]/)
        .withMessage("Password must contain one number.")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("Password must contain one special character.")
];

const loginValidation = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Invalid email address."),

    body("password")
        .notEmpty()
        .withMessage("Password is required.")
];

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Validation failed.",
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    registerValidation,
    loginValidation,
    validate
};