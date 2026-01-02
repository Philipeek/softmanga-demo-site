const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

function securityMiddleware(app) {
    // Security headers
    app.use(helmet());

    // CORS (на старте разрешаем всё; позже можно ограничить доменом)
    app.use(cors({
        origin: true,
        credentials: true
    }));

    // Rate limit for API routes
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 300,                 // 300 requests / 15 min per IP
        standardHeaders: true,
        legacyHeaders: false,
        message: {
            error: {
                status: 429,
                message: "Too many requests, please try again later"
            }
        }
    });

    // Применяем лимит только к API
    app.use("/api", limiter);
}

module.exports = securityMiddleware;
