const ApiError = require("../utils/ApiError");
const { verifyToken } = require("../utils/jwt");

function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(ApiError.badRequest("Authorization token required"));
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        return next(ApiError.badRequest("Invalid or expired token"));
    }
}

module.exports = requireAuth;
