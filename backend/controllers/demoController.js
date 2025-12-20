function throwDemoError(req, res) {
    throw new Error("Demo error for testing error handler");
}

module.exports = {
    throwDemoError
};
