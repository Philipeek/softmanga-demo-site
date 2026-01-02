const mangaService = require("../services/mangaService");
const ApiError = require("../utils/ApiError");
const { parseIdParam } = require("../utils/validators");

async function listMangas(req, res, next) {
    try {
        const mangas = await mangaService.getAllMangas();
        res.json({ data: mangas });
    } catch (error) {
        next(error);
    }
}

async function getManga(req, res, next) {
    try {
        const id = parseIdParam(req.params.id, "manga id");

        const manga = await mangaService.getMangaById(id);
        if (!manga) return next(ApiError.notFound("Manga not found"));

        res.json({ data: manga });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listMangas,
    getManga
};
