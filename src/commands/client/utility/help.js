module.exports = [{
    name: "help",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $interactionFollowUp[
            https://cdn.discordapp.com/attachments/1263969081967775764/1327692018897649726/navigation.png?ex=6784a5cc&is=6783544c&hm=9dd6f20932fcdac9890ebf7a211879f6448ed18910c27711e377344d818f370e&
            {actionRow:
                {selectMenu:helpMenu:Выберите категорию:1:1:false:
                    {stringInput:Список команд:cmdList::false:<a\:moth\:1328770041747079178>}
                    {stringInput:Музыка (v0.0.1):musicHelp::false:<a\:onigiri\:1343065225439477890>}
                } 
            }
            ;true;false
        ]

        $interactionDefer[true]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $if[$getGuildMVar[helpMenu;$guildID]==]
            
            $setGuildMVar[helpMenu;$getObject[helpMenu;true];$guildID]

            $createObject[helpMenu;{"Utility": {"help": "</help:$getApplicationCommandID[help;global]>","ping": "</ping:$getApplicationCommandID[ping;global]>","profile": "</profile:$getApplicationCommandID[profile;global]>"},"Fun": {"flip": "</flip:$getApplicationCommandID[flip;global]>","roll": "</roll:$getApplicationCommandID[roll;global]>","say": "</say:$getApplicationCommandID[say;global]>","send": "</send:$getApplicationCommandID[send;global]>"},"Music": {"play": "</play:$getApplicationCommandID[play;global]>","queue": "</queue:$getApplicationCommandID[queue;global]>","join": "</join:$getApplicationCommandID[join;global]>","leave": "</leave:$getApplicationCommandID[leave;global]>","status": "</status:$getApplicationCommandID[status;global]>","lyrics": "</lyrics:$getApplicationCommandID[lyrics;global]>", "nowplaying": "</nowplaying:$getApplicationCommandID[nowplaying;global]>"}}]

        $else

        $endIF
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
                    {stringInput:Музыка (v0.0.1):musicHelp::false:<a\:onigiri\:1343065225439477890>}
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
                {field:Utility:$getObjectProperty[helpMenu;Utility.help], $getObjectProperty[helpMenu;Utility.ping], $getObjectProperty[helpMenu;Utility.profile]:false}
                {field:Fun:$getObjectProperty[helpMenu;Fun.flip], $getObjectProperty[helpMenu;Fun.roll], $getObjectProperty[helpMenu;Fun.say], $getObjectProperty[helpMenu;Fun.send]:false}
                {field:Music (Alpha test):$getObjectProperty[helpMenu;Music.play], $getObjectProperty[helpMenu;Music.join], $getObjectProperty[helpMenu;Music.leave], $getObjectProperty[helpMenu;Music.queue], $getObjectProperty[helpMenu;Music.status], $getObjectProperty[helpMenu;Music.lyrics], $getObjectProperty[helpMenu;Music.nowplaying]:false}
                {color:$getMVar[embedColor]}
            }
            {actionRow:
                {button::secondary:backID:false:↩️}
            }
        ]

        $createObject[helpMenu;$getGuildMVar[helpMenu;$guildID]]

        $onlyIf[$interactionData[values[0]]==cmdList;]
    `
}, {
    name: "helpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[
            {newEmbed:
                {title:Музыка}
                {field:Предупреждение!:На данный момент вся музыка в боте тестируется, если что то\nне так, пишите мне в лс <@$getMVar[ownerID]>\n\nЕсли хотите поспособствовать добавлению в бота полной\nподдержки $getObjectProperty[emojis;vkmusic] VK Музыки и $getObjectProperty[emojis;yandexmusic] Yandex Музыки, можете мне\nпомочь с созданием русских аккантов на данных платформах.:false}
                {field:Доступные платформы:$getObjectProperty[emojis;spotify] Spotify⠀⠀$getObjectProperty[emojis;soundcloud] SoundCloud⠀⠀$getObjectProperty[emojis;youtube] YouTube:false}
                {field:Полу-доступные платформы:$getObjectProperty[emojis;vkmusic] VK Музыка:false}
                {field:Доступные команды:$getObjectProperty[helpMenu;Music.play], $getObjectProperty[helpMenu;Music.join], $getObjectProperty[helpMenu;Music.leave], $getObjectProperty[helpMenu;Music.queue], $getObjectProperty[helpMenu;Music.status], $getObjectProperty[helpMenu;Music.lyrics], $getObjectProperty[helpMenu;Music.nowplaying]:false}
                {color:$getMVar[embedColor]}
            }
            {actionRow:
                {button::secondary:backID:false:↩️}
            }
        ]

        $createObject[emojis;$getMVar[emojis]]
        $createObject[helpMenu;$getGuildMVar[helpMenu;$guildID]]

        $onlyIf[$interactionData[values[0]]==musicHelp;]
    `
}];