module.exports = {
    name: "previous",
    type: "interaction",
    prototype: "button",
    code: `
        $previousTrack
        $interactionReply[⏭️;everyone;true;false]
    `
}