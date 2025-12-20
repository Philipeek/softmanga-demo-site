const mangaModel = require("../models/mangaModel");

async function getAllMangas() {
    return mangaModel.getAllMangas();
}

async function getMangaById(id) {
    return mangaModel.getMangaById(id);
}

module.exports = {
    getAllMangas,
    getMangaById
};
