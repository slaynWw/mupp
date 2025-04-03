module.exports = {
    name: 'lyrics',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {description:### [$lyrics[$slashOption[title];artist]]($lyrics[$slashOption[title];artistUrl]) - [$lyrics[$slashOption[title];title]]($lyrics[$slashOption[title];url])\n$lyrics[$slashOption[title];lyrics]}
                {thumbnail:$lyrics[$slashOption[title];thumbnail]}
                {color:$getData[embed.color]}
            }
            ;false;false
        ]

        $interactionDefer[false]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$lyrics[$slashOption[title];lyrics]!=;
            Упс... Что-то пошло не так...\n-# Трек который вы искали не имеет текста на Youtube Music.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
};