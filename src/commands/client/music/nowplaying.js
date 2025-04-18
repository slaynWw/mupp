module.exports = [{
    name: 'nowplaying',
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
        {newEmbed:
            {description:-# ./commands/music/nowplaying.md\n### $getEmoji[music.platforms.$songInfo[platform]] $songInfo[author] - $songInfo[title]}
            {field:Длительность:$currentTrackDuration[true]/$songInfo[duration]:true}
            {field:Артист:$songInfo[artist]:true}
            {field:Добавил:$songInfo[requester.mention]:true}
            {thumbnail:$songInfo[thumbnail]}
            {color:$getDominantColor[$songInfo[thumbnail]]}
        }
        {actionRow:
            {button:./track:5:$nonEscape[$songInfo[url]]:false}
            {button:./album:5:$if[$songInfo[albumUrl]!=;$nonEscape[$songInfo[albumUrl]];https\://google.com]:$if[$songInfo[albumUrl]!=;false;true]}
        }
        ;everyone;true;false
    ]

    $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

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
        Упс... Что-то пошло не так...\n-# Бот даже не подключен к голосовому каналу. Ипользуйте </play\:$getApplicationCommandID[play;global]> что-бы добавить трек.
        {options:
            {interaction}   
        }
        {extraOptions:
            {ephemeral}
        }
    ]
    `
}]