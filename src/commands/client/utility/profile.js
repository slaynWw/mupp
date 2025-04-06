module.exports = [{
    name: "profile",
    type: "interaction",
    prototype: "slash",
    code: `
        $setMessageMVar[profileUserID;$get[user];$get[msgID]]
        $setChannelMVar[profileMessageID;$get[msgID];$channelID]
        $let[msgID;$interactionReply[{newEmbed:{description:-# ./commands/utilities/profile.js}{field:В числе участников с\::$getEmoji[discord] <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — $getEmoji[qff] <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}{field:$getUserMVar[fieldTitle;$get[user]]:$getUserMVar[fieldDescription;$get[user]]:false}{thumbnail:$userAvatar[$get[user]]}{image:$if[$userBanner[$get[user]]==null;$getImage[mupp.botinfo];$userBanner[$get[user];256;true]]}{color:$getDominantColor[$userAvatar[$get[user]]]}}{actionRow:{button::secondary:userStats:false:📊}{button:Профиль $username[$get[user]]:secondary:profileName:true}{button::secondary:userSettings:false:⚙️}};everyone;false;true]]
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
        $let[user;$if[$slashOption[user]==;$interactionData[author.id];$slashOption[user]]]
    `
}, {
    name: "userBack",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[{newEmbed:{description:-# ./commands/utilities/profile.js}{field:В числе участников с\::$getEmoji[discord] <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — $getEmoji[qff] <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}{field:$getUserMVar[fieldTitle;$get[user]]:$getUserMVar[fieldDescription;$get[user]]:false}{thumbnail:$userAvatar[$get[user]]}{image:$if[$userBanner[$get[user]]==null;$getImage[mupp.botinfo];$userBanner[$get[user];256;true]]}{color:$getDominantColor[$userAvatar[$get[user]]]}}{actionRow:{button::secondary:userStats:false:📊}{button:Профиль $username[$get[user]]:secondary:profileName:true}{button::secondary:userSettings:false:⚙️}}]

        $let[user;$getMessageMVar[profileUserID;$getChannelMVar[profileMessageID;$channelId]]]
    `
}, {
    name: "userStats",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[
            {newEmbed:
                {thumbnail:$userAvatar[$get[user]]}
                {description:-# ./commands/utilities/profile.js}
                {field:Общее:\`\`\`json\nmessages\: $getUserMVar[messageCount;$get[user]]\nvoice time\: $get[h]h\ncommands used\: $getUserMVar[commandsUsed;$get[user]]\`\`\`:false}
                {field:Похвалы:\`\`\`json\ntipped\: $getUserMVar[playerTipped;$get[user]]\nreceived\: $getUserMVar[getTips;$get[user]]\`\`\`:false}
                {field:Анонимные сообщения:\`\`\`json\nsended\: $getUserMVar[sendedMessageCount;$get[user]]\nreceived\: $getUserMVar[receivedMessageCount;$get[user]]\`\`\`:false}
                {image:$if[$userBanner[$get[user]]==null;$getImage[mupp.botinfo];$userBanner[$get[user];256;true]]}
                {color:$getDominantColor[$userAvatar[$get[user]]]}
            }
            {actionRow:
                {button::secondary:userBack:false:↩️}
                {button:Профиль $username[$get[user]]:secondary:profileName:true}
                {button::secondary:userSettings:false:⚙️}
            }
            ;false;false
        ]

        $let[h;$roundTenth[$math[$getUserMVar[voiceTime;$get[user]]/(1000*60*60)];2]]
        $let[user;$getMessageMVar[profileUserID;$getChannelMVar[profileMessageID;$channelId]]]
    `
}, {
    name: "userSettings",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionModal[Настройки профиля;profileSettingsModal;
            {actionRow:
                {textInput:Заголовок текст бокса:1:fieldTitle:true:Пример - Обо мне:1:100}
            }
            {actionRow:
                {textInput:Описание текст бокса:2:fieldDescription:true:Можно вставлять ссылки, арты, хуярты, пасты и т.п.:1:500}
            }
        ]

        $let[user;$getMessageMVar[profileUserID;$getChannelMVar[profileMessageID;$channelId]]]
    `
}, {
    name: "profileSettingsModal",
    type: "interaction",
    prototype: "modal",
    code: `
        $interactionUpdate[
            {newEmbed:
                {description:-# ./commands/utilities/profile.js}
                {field:В числе участников с\::$getEmoji[discord] <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — $getEmoji[qff] <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}
                {field:$getUserMVar[fieldTitle;$get[user]]:$getUserMVar[fieldDescription;$get[user]]:false}
                {thumbnail:$userAvatar[$get[user]]}
                {image:$if[$userBanner[$get[user]]==null;$getImage[mupp.botinfo];$userBanner[$get[user];256;true]]}
                {color:$getDominantColor[$userAvatar[$get[user]]]}
            }
            {actionRow:
                {button::secondary:userStats:false:📊}
                {button:Профиль $username[$get[user]]:secondary:profileName:true}
                {button::secondary:userSettings:false:⚙️}
            }
            ;false;false
        ]

        $setUserMVar[fieldTitle;$textInputValue[fieldTitle];$interactionData[author.id]]
        $setUserMVar[fieldDescription;$textInputValue[fieldDescription];$interactionData[author.id]]
        $let[user;$interactionData[author.id]]
    `
}]

/*
        $interactionReply[
            {newEmbed:
                {author:$userNickname[$guildID;$get[user];true]}
                {description:$userBadges[$get[user]; ] $getUserMVar[customBadges;$get[user]]}
                {field:В числе участников с\::<\:discord\:1330671429947101285> <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — <\:qff\:1330670969169248256> <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}
                {field:$getUserMVar[fieldTitle;$get[user]]:$getUserMVar[fieldDescription;$get[user]]:false}
                {thumbnail:$userAvatar[$get[user]]}
                {image:$if[$userBanner[$get[user];4096;true;png]==null;$getMVar[line];$userBanner[$get[user];4096;true;png]]}
                {color:$getData[embed.color]}
            }
            {actionRow:
                {selectMenu:profileMenu:Профиль $username[$get[user]]:1:1:false:
                    {stringInput:Статистика:profileStats::false:📈}
                    {stringInput:Настройки профиля:profileSettings::false:🔧}
                }
            }
            ;everyone;false;false
        ]
*/