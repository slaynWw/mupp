module.exports = {
    name: "skip",
    type: "interaction",
    prototype: "button",
    code: `
        $skipTrack
        $interactionReply[⏭️;everyone;true;false]
    `
}