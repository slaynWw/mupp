module.exports = [{
    name: "help",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            https://cdn.discordapp.com/attachments/1263969081967775764/1327692018897649726/navigation.png?ex=6784a5cc&is=6783544c&hm=9dd6f20932fcdac9890ebf7a211879f6448ed18910c27711e377344d818f370e&
            {actionRow:
                {selectMenu:helpMenu:Выберите категорию:1:1:false:
                    {stringInput:Список команд:cmdList::false:<a\:moth\:1328770041747079178>}
                } 
            }
            ;everyone;false;false
        ]
    `
}, {
    name: "backID",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[
            https://cdn.discordapp.com/attachments/1263969081967775764/1327692018897649726/navigation.png?ex=6784a5cc&is=6783544c&hm=9dd6f20932fcdac9890ebf7a211879f6448ed18910c27711e377344d818f370e&
            {actionRow:
                {selectMenu:helpMenu:Выберите категорию:1:1:false:
                    {stringInput:Список команд:cmdList::false:<a\:moth\:1328770041747079178>}
                }
            }
        ]
    `
}, {
    name: "helpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[
            {newEmbed:
                {author:Список команд}
                {field:Utility:</help\:$getApplicationCommandID[help;global]>, </ping\:$getApplicationCommandID[ping;global]>:false}
                {field:Fun:</send\:$getApplicationCommandID[send;global]>, </say\:$getApplicationCommandID[say;global]>, </roll\:$getApplicationCommandID[roll;global]>, </flip\:$getApplicationCommandID[flip;global]>:false}
                {field:Music:\`.play <name/url>\`, \`.leave\`, \`.join\`, \`.previous\`, \`.skip\`, \`.status\`, \`.stop\`, \`.resume\`, \`.queue <page>\`:false}
                {color:$getMVar[embedColor]}
            }
            {actionRow:
                {button::secondary:backID:false:↩️}
            }
        ]

        $onlyIf[$interactionData[values[0]]==cmdList;]
    `
}];

/*

    $interactionReply[
        {newEmbed:
            {field:Полезное:</help:1238923268329832448>, </ping:1241456874998464622>:false}
            {field:Забавки:</send:1328000890090819595>, </post:1328000476024668232>:false}
            {footer:$guildName:$guildIcon}
            {color:$getGuildVar[embedColor]}
        }
    ;everyone;false;false]

slash command
$createApplicationCommand[global;help;Посмтореть список доступных команд.;false;user;guild;message]

*/