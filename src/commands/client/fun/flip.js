module.exports = [{
    name: "flip",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            <@$interactionData[author.id]> подбрасывает монетку\: \`$randomText[ОРЕЛ;РЕШКА]\`
            ;false;false
        ]
        $interactionDefer[false]
    `
}] 