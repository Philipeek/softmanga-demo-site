const ApiError = require("./ApiError");

function parseIdParam(idRaw, name = "id") {
    const id = Number(idRaw);

    if (!Number.isInteger(id) || id <= 0) {
        throw ApiError.badRequest(`Invalid ${name}`);
    }

    return id;
}

module.exports = {
    parseIdParam
};
