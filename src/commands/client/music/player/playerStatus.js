module.exports = {
    name: "pauseresume",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $if[$playerStatus==paused]
            $resumeTrack
            $interactionReply[▶️;everyone;true;false]
        $else
            $pauseTrack
            $interactionReply[⏸️;everyone;true;false]
        $endIF
    `
}