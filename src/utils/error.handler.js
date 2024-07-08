module.exports = function (e) {
    return {
        error: true,
        message: e instanceof Error ? e.message : e
    };
};
