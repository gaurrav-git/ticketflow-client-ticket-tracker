const registerUser = async (req, res) => {
    console.log("📥 Register Request Received");
    console.log(req.body);

    res.status(200).json({
        success: true,
        message: "Controller reached successfully."
    });
};

module.exports = {
    registerUser
};