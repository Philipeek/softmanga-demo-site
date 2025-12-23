const ApiError = require("../utils/ApiError");

function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            error: {
                message: err.message,
                status: err.statusCode
            }
        });
    }

    console.error("Unhandled error:", err);

    return res.status(500).json({
        error: {
            message: "Internal server error",
            status: 500
        }
    });
}

module.exports = errorHandler;
