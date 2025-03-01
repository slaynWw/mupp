module.exports = {
    name: 'trackStart',
    channel: '$channelId',
    type: 'trackStart',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $setNowPlaying[$get[ID]]
            $writeFile[./src/data/message.txt;$get[ID]]
            $let[ID;$sendMessage[{newEmbed:{description:### $replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;$getObjectProperty[emojis;youtube]];spotify;$getObjectProperty[emojis;spotify]];soundcloud;$getObjectProperty[emojis;soundcloud]];vkmusic;$getObjectProperty[emojis;vkmusic]] [$songInfo[title]]($songInfo[url])}{field:Длительность:$songInfo[duration]:true}{field:Пинг:\`$playerPingms\`:true}{field:Добавил:$songInfo[requester.mention]:true}{thumbnail:$songInfo[thumbnail]}{image:$getMVar[line]}{color:$replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e];vkmusic;0077ff]}}{actionRow:{selectMenu:loopMode:Repeat $loopStatus:1:1:false:{stringInput:off:noneMode::true:❌}{stringInput:queue:queueMode::false:🔁}{stringInput:single:songMode::false:🔂}}}{actionRow:{button::secondary:stop:false:⏹️}{button::secondary:previous:false:⏮️}{button::secondary:pauseresume:false:⏸️}{button::secondary:skip:false:⏭️}{button::secondary:queueButton:false:#️⃣}};true]]
        $else
            $leaveVC
        $endif

        $createObject[emojis;$getMVar[emojis]]
    `
};

/*

$sendMessage[
    {newEmbed:
        {description:### $replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;$getObjectProperty[emojis;youtube]];spotify;$getObjectProperty[emojis;spotify]];soundcloud;$getObjectProperty[emojis;soundcloud]];vkmusic;$getObjectProperty[emojis;vkmusic]] [$songInfo[title]]($songInfo[url])}
        {field:Длительность:$songInfo[duration]:true}
        {field:Пинг:\`$playerPingms\`:true}
        {field:Добавил:$songInfo[requester.mention]:true}
        {thumbnail:$songInfo[thumbnail]}
        {image:$getMVar[line]}
        {color:$replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e];vkmusic;0077ff]}
    }
    {actionRow:
        {selectMenu:loopMode:Repeat $loopStatus:1:1:false:
            {stringInput:off:noneMode::true:❌}
            {stringInput:queue:queueMode::false:🔁}
            {stringInput:single:songMode::false:🔂}
        }
    }
    {actionRow:
        {button::secondary:stop:false:⏹️}
        {button::secondary:previous:false:⏮️}
        {button::secondary:pauseresume:false:⏸️}
        {button::secondary:skip:false:⏭️}
        {button::secondary:queueButton:false:#️⃣}
    }
    ;true
]

$sendMessage[{newEmbed:{description:### $replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;$getObjectProperty[emojis;youtube]];spotify;$getObjectProperty[emojis;spotify]];soundcloud;$getObjectProperty[emojis;soundcloud]];vkmusic;$getObjectProperty[emojis;vkmusic]] [$songInfo[title]]($songInfo[url])}{field:Длительность:$songInfo[duration]:true}{field:Пинг:\`$playerPingms\`:true}{field:Добавил:$songInfo[requester.mention]:true}{thumbnail:$songInfo[thumbnail]}{image:$getMVar[line]}{color:$replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e];vkmusic;0077ff]}}{actionRow:{selectMenu:loopMode:Repeat $loopStatus:1:1:false:{stringInput:off:noneMode::true:❌}{stringInput:queue:queueMode::false:🔁}{stringInput:single:songMode::false:🔂}}}{actionRow:{button::secondary:stop:false:⏹️}{button::secondary:previous:false:⏮️}{button::secondary:pauseresume:false:⏸️}{button::secondary:skip:false:⏭️}{button::secondary:queueButton:false:#️⃣}};true]

$sendMessage[{newEmbed:{description:### $replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;$getObjectProperty[emojis;youtube]];spotify;$getObjectProperty[emojis;spotify]];soundcloud;$getObjectProperty[emojis;soundcloud];vkmusic;$getObjectProperty[emojis;vkmusic]]] [$songInfo[title]]($songInfo[url])}{field:Длительность:$songInfo[duration]:true}{field:Пинг:\`$playerPingms\`:true}{field:Добавил:$songInfo[requester.mention]:true}{thumbnail:$songInfo[thumbnail]}{image:$getMVar[line]}{color:$replaceText[$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e];vkmusic;0077ff]}}{actionRow:{selectMenu:loopMode:Repeat $loopStatus:1:1:false:{stringInput:off:noneMode::true:❌}{stringInput:queue:queueMode::false:🔁}{stringInput:single:songMode::false:🔂}}}{actionRow:{button::secondary:stop:false:⏹️}{button::secondary:previous:false:⏮️}{button::secondary:pauseresume:false:⏸️}{button::secondary:skip:false:⏭️}{button::secondary:queueButton:false:#️⃣}};true]
    $replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;$getObjectProperty[youtube]];spotify;$getObjectProperty[spotify]];soundcloud;$getObjectProperty[soundcloud]]
*/