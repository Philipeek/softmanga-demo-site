const mangaService = require("../services/mangaService");

async function listMangas(req, res, next) {
    try {
        const mangas = await mangaModel.getAllMangas();
        res.json({ data: mangas });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listMangas
};
