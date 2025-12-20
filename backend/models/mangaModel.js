// backend/models/mangaModel.js

const mockMangas = [
    {
        id: 1,
        title: "Solo Leveling",
        status: "completed",
        chapters: 179
    },
    {
        id: 2,
        title: "Omniscient Reader",
        status: "ongoing",
        chapters: 210
    },
    {
        id: 3,
        title: "Nano Machine",
        status: "ongoing",
        chapters: 230
    }
];

async function getAllMangas() {
    return mockMangas;
}

async function getMangaById(id) {
    return mockMangas.find(m => m.id === Number(id));
}

module.exports = {
    getAllMangas,
    getMangaById
};
