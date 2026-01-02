const express = require("express");
const securityMiddleware = require("./middlewares/security");

const indexRouter = require("./routes/index");
const requestLogger = require("./middlewares/requestLogger");
const errorHandler = require("./middlewares/errorHandler");

const apiV1Routes = require("./routes/v1");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

securityMiddleware(app);

app.use(requestLogger);

app.use("/", indexRouter);
app.use("/api/v1", apiV1Routes);

// Global error handler (always last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Demo server running on http://localhost:${PORT}`);
});
