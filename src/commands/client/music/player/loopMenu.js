module.exports = [{
    name: 'loopMenu',
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $interactionReply[🔁;everyone;true;false]

        $loopMode[queue]

        $onlyIf[$interactionData[values[0]]==queueMode;]
    `
}, {
    name: 'loopMenu',
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $interactionReply[🔂;everyone;true;false]

        $loopMode[song]

        $onlyIf[$interactionData[values[0]]==songMode;]
    `
}]