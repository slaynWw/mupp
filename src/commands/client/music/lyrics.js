module.exports = {
    name: 'lyrics',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {description:### [$lyrics[$slashOption[title];artist]]($lyrics[$slashOption[title];artistUrl]) - [$lyrics[$slashOption[title];title]]($lyrics[$slashOption[title];url])\n$lyrics[$slashOption[title];lyrics]}
                {thumbnail:$lyrics[$slashOption[title];thumbnail]}
                {color:$getMVar[embedColor]}
            }
            ;false;false
        ]

        $interactionDefer[false]
    `
};