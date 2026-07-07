const express = require("express");

const router = express.Router();

const { registerUser } = require("../controllers/auth.controller");

const {
    registerValidation,
    validate
} = require("../validators/auth.validator");

router.post(
    "/register",
    registerValidation,
    validate,
    registerUser
);

module.exports = router;