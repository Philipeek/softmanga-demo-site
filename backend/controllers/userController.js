const userService = require("../services/userService");

async function listUsers(req, res, next) {
    try {
        const users = await userService.getAllUsers();
        res.json({ data: users });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ data: user });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listUsers,
    getUser
};
