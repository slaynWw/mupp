module.exports = [{
    name: 'loopMode',
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $interactionReply[🔁;everyone;true;false]

        $loopMode[queue]

        $onlyIf[$interactionData[values[0]]==queueMode;]
    `
}, {
    name: 'loopMode',
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $interactionReply[🔂;everyone;true;false]

        $loopMode[song]

        $onlyIf[$interactionData[values[0]]==songMode;]
    `
}, {
    name: 'loopMode',
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
        $interactionReply[❌;everyone;true;false]

        $loopMode[none]

        $onlyIf[$interactionData[values[0]]==noneMode;]
    `
}]