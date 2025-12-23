const express = require("express");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const requestLogger = require("./middlewares/requestLogger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(requestLogger);

app.use("/", indexRouter);

const apiV1Routes = require("./routes/v1");

app.use("/api/v1", apiV1Routes);


// Global error handler (always last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Demo server running on http://localhost:${PORT}`);
});
