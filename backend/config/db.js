// backend/config/db.js

const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    user: process.env.DB_USER || "demo_user",
    password: process.env.DB_PASSWORD || "demo_password",
    database: process.env.DB_NAME || "softmanga_demo",
    max: process.env.DB_POOL_MAX ? Number(process.env.DB_POOL_MAX) : 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

pool.on("connect", () => {
    console.log("PostgreSQL connected");
});

pool.on("error", (err) => {
    console.error("Unexpected PostgreSQL error", err);
});

module.exports = pool;
