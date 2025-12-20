const pool = require("../config/db");

async function getAllMangas() {
    const query = `
        SELECT id, title, status, created_at
        FROM mangas
        ORDER BY created_at DESC
        LIMIT 10
    `;

    const { rows } = await pool.query(query);
    return rows;
}

module.exports = {
    getAllMangas
};
