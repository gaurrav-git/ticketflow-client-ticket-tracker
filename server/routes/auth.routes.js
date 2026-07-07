const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/auth.controller");

const {
    registerValidation,
    loginValidation,
    validate
} = require("../validators/auth.validator");

router.post(
    "/register",
    registerValidation,
    validate,
    registerUser
);

router.post(
    "/login",
    loginValidation,
    validate,
    loginUser
);

module.exports = router;