module.exports = {
    name: "stop",
    type: "interaction",
    prototype: "button",
    code: `
        $leaveVC
        $destroyPlayer
        $deleteNowPlaying
        $interactionReply[⏹️;everyone;true;false]
    `
}