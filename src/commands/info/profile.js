module.exports = [{
    name: "profile",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:$userNickname[$guildID;$get[user];true]}
                {description:$userBadges[$get[user]; ] $getUservar[customBadges;$get[user]]}
                {field:В числе участников с\::<\:discord\:1330671429947101285> <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — <\:qff\:1330670969169248256> <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}
                {field:$getUserVar[fieldTitle;$get[user]]:$getUserVar[fieldDescription;$get[user]]:false}
                {thumbnail:$userAvatar[$get[user]]}
                {image:$if[$userBanner[$get[user];4096;true;png]==null;$getVar[line];$userBanner[$get[user];4096;true;png]]}
                {color:$getVar[embedColor]}
            }
            {actionRow:
                {selectMenu:profileMenu:Профиль $username[$get[user]]:1:1:false:
                    {stringInput:Статистика:profileStats::false:📈}
                    {stringInput:Настройки профиля:profileSettings::false:🔧}
                }
            }
            ;everyone;false;false
        ]

        $writeFile[./src/data/user.txt;$get[user]]

        $let[user;$if[$slashOption[user]==;$interactionData[author.id];$slashOption[user]]]

        $onlyIf[$slashOption[user]==;]
    `
}, {
    name: "profile",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {author:$userNickname[$guildID;$get[user];true]}
                {description:$userBadges[$get[user]; ] $getUservar[customBadges;$get[user]]}
                {field:В числе участников с\::<\:discord\:1330671429947101285> <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — <\:qff\:1330670969169248256> <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}
                {field:$getUserVar[fieldTitle;$get[user]]:$getUserVar[fieldDescription;$get[user]]:false}
                {thumbnail:$userAvatar[$get[user]]}
                {image:$if[$userBanner[$get[user];4096;true;png]==null;$getVar[line];$userBanner[$get[user];4096;true;png]]}
                {color:$getVar[embedColor]}
            }
            {actionRow:
                {selectMenu:profileMenu:Профиль $username[$get[user]]:1:1:false:
                    {stringInput:Статистика:profileStats::false:📈}
                }
            }
            ;everyone;false;false
        ]

        $writeFile[./src/data/user.txt;$get[user]]

        $let[user;$if[$slashOption[user]==;$interactionData[author.id];$slashOption[user]]]

        $onlyIf[$isBot[$slashOption[user]]==false;
            Упс... Что-то пошло не так...\n-# Упомянутый пользователь является ботом.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]

        $onlyIf[$slashOption[user]!=;]
    `
}, {
    name: "profileBack",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[
            {newEmbed:
                {author:$userNickname[$guildID;$get[user];true]}
                {description:$userBadges[$get[user]; ] $getUservar[customBadges;$get[user]]}
                {field:В числе участников с\::<\:discord\:1330671429947101285> <t:$truncate[$divide[$creationDate[$get[user];ms];1000]]:R> — <\:qff\:1330670969169248256> <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID;ms];1000]]:R>:false}
                {field:$getUserVar[fieldTitle;$get[user]]:$getUserVar[fieldDescription;$get[user]]:false}
                {thumbnail:$userAvatar[$get[user]]}
                {image:$if[$userBanner[$get[user];4096;true;png]==null;$getVar[line];$userBanner[$get[user];4096;true;png]]}
                {color:$getVar[embedColor]}
            }
            {actionRow:
                {selectMenu:profileMenu:Профиль $username[$get[user]]:1:1:false:
                    {stringInput:Статистика:profileStats::false:📈}
                    {stringInput:Настройки профиля:profileSettings::false:🔧}
                }
            }
            ;false;false
        ]

        $let[user;$readFile[./src/data/user.txt]]
    `
}, {
    name: "profileMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[
            {newEmbed:
                {author:Статистика $userNickname[$guildID;$get[user];true]}

                {field:Общяя статистика:Сообщений\: $getUserVar[messageCount;$get[user]]\nВремя в голосовом канале\: $getUserVar[voiceTime;$get[user]]:false}
                {field:Анонимные сообщения:Получено\: $getUserVar[receivedMessageCount;$get[user]]\nОтправлено\: $getUserVar[sendedMessageCount;$get[user]]:false}

                {thumbnail:$userAvatar[$get[user]]}
                {color:$getVar[embedColor]}
            }
            {actionRow:
                {button:Вернуться:secondary:profileBack:false:↩️}
            }
            ;false;false
        ]

        $let[user;$readFile[./src/data/user.txt]]

        $onlyIf[$interactionData[values[0]]==profileStats;]
    `
}, {
    name: "profileMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionModal[Настройки профиля;profileSettingsModal;
            {actionRow:
                {textInput:Заголовок текст бокса:1:fieldTitle:true:Пример - Обо мне:1:100}
            }
            {actionRow:
                {textInput:Описание текст бокса:2:fieldDescription:true:Можно вставлять ссылки, арты, хуярты, пасты и т.п.:1:500}
            }
        ]

        $let[user;$readFile[./src/data/user.txt]]

        $onlyIf[$interactionData[values[0]]==profileSettings;]
    `
}, {
    name: "profileSettingsModal",
    type: "interaction",
    prototype: "modal",
    code: `
        $interactionReply[
            <\:like\:1330681670017220691>
            ;everyone;true;false
        ]

        $setUserVar[fieldTitle;$textInputValue[fieldTitle];$interactionData[author.id]]
        $setUserVar[fieldDescription;$textInputValue[fieldDescription];$interactionData[author.id]]
    `
}]

/*
            {actionRow:
                {selectMenu:profileMenu:Профиль $username[$get[user]]:1:1:false:
                    {stringInput:Настройки профиля:profileSettings::false:}
                }
            }
*/