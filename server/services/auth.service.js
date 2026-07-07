const registerUser = async (userData) => {
    console.log("📦 Service Layer Reached");

    return {
        success: true,
        message: "Service layer reached successfully.",
        data: userData
    };
};

module.exports = {
    registerUser
};