module.exports = {
    name: "Function Error",
    channel: "$channelId",
    type: "functionError",
    code: `
        $log[$handleError[error];#d4736c]
    `
};