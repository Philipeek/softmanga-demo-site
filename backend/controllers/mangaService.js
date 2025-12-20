const mangaModel = require("../models/mangaModel");

async function getAllMangas() {
    return mangaModel.getAllMangas();
}

module.exports = {
    getAllMangas
};
