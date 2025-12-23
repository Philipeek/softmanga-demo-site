// Mock implementation
// Will be replaced with PostgreSQL queries

const mockUsers = [
    {
        id: 1,
        username: "admin",
        created_at: new Date()
    },
    {
        id: 2,
        username: "demo_user",
        created_at: new Date()
    }
];

async function getAllUsers() {
    return mockUsers;
}

async function getUserById(id) {
    return mockUsers.find(u => u.id === Number(id));
}

module.exports = {
    getAllUsers,
    getUserById
};
