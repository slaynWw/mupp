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

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $onlyIf[$getMVar[categoryFun]==false;
            Упс... Что-то пошло не так...\n-# Данная команда выключена.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
}] 