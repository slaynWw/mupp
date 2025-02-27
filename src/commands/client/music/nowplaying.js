module.exports = [{
    name: 'nowplaying',
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
        {newEmbed:
            {description:### Сейчас играет [$songInfo[title]]($songInfo[url])}
            {field:Длительность:$currentTrackDuration[true]/$songInfo[duration]:true}
            {field:Артист:$songInfo[artist]:true}
            {field:Добавил:$songInfo[requester.mention]:true}
            {thumbnail:$songInfo[thumbnail]}
            {image:$getMVar[line]}
            {color:$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}
        }
        ;everyone;true;false
    ]

    $createObject[emojis;$getMVar[emojis]]

    $onlyIf[$playerStatus!=stopped&&$playerStatus!=destroyed;
        Упс... Что-то пошло не так...\n-# Музыкальная очередь пуста. Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.
        {options:
            {interaction}   
        }
        {extraOptions:
            {ephemeral}
        }
    ]
    $onlyIf[$hasPlayer==true;
        Упс... Что-то пошло не так...\n-# Сейчас отсутствует. Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.
        {options:
            {interaction}   
        }
        {extraOptions:
            {ephemeral}
        }
    ]
    `
}]