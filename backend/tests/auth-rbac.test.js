const request = require("supertest");
const app = require("../app");
const { signToken } = require("../utils/jwt");

describe("Auth + RBAC", () => {
    beforeAll(() => {
        // Убедимся, что токены подписываются тем же секретом, что и middleware
        process.env.JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
    });

    test("GET /api/v1/admin/panel -> 401 without token", async () => {
        const res = await request(app).get("/api/v1/admin/panel");
        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty("error");
        expect(res.body.error).toHaveProperty("status", 401);
    });

    test("GET /api/v1/admin/panel -> 403 with non-admin role", async () => {
        const token = signToken({ id: 2, role: "user" });

        const res = await request(app)
            .get("/api/v1/admin/panel")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(403);
        expect(res.body).toHaveProperty("error");
        expect(res.body.error).toHaveProperty("status", 403);
    });

    test("GET /api/v1/admin/panel -> 200 with admin role", async () => {
        const token = signToken({ id: 1, role: "admin" });

        const res = await request(app)
            .get("/api/v1/admin/panel")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("data");
        expect(res.body.data).toHaveProperty("message");
    });

    test("GET /api/v1/me -> 200 with valid token", async () => {
        const token = signToken({ id: 123, role: "user" });

        const res = await request(app)
            .get("/api/v1/me")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("data");
        expect(res.body.data).toHaveProperty("user");
        expect(res.body.data.user).toHaveProperty("id", 123);
    });
});
