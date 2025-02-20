module.exports = {
    name: 'trackStart',
    channel: '$channelId',
    type: 'trackStart',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $setNowPlaying[$get[ID]]
            $writeFile[./src/data/message.txt;$get[ID]]
            $let[ID;$sendMessage[{newEmbed:{author:$songInfo[artist]}{description:[$songInfo[title]]($songInfo[url])}{field:Длительность:$songInfo[duration]:true}{field:Добавил:$songInfo[requester.mention]:true}{thumbnail:$songInfo[thumbnail]}{image:$getMVar[line]}{color:$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}}{actionRow:{selectMenu:loopMode:loopMode $loopStatus:1:1:false:{stringInput:none:noneMode::false:🔀}{stringInput:song:songMode::false:🔂}{stringInput:queue:queueMode::false:🔁}}}{actionRow:{button::secondary:previous:false:⏮️}{button::secondary:pauseresume:false:⏯️}{button::secondary:skip:false:⏭️}};true]]
        $else
            $destroyPlayer
        $endif
    `
};

/*

$sendMessage[
    {newEmbed:
        {author:$songInfo[artist]}
        {description:[$songInfo[title]]($songInfo[url])}
        {field:Длительность:$songInfo[duration]:true}
        {field:Добавил:$songInfo[requester.mention]:true}
        {thumbnail:$songInfo[thumbnail]}
        {image:$getMVar[line]}
        {color:$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}
    }
    {actionRow:
        {selectMenu:loopMode:loopMode $loopStatus:1:1:false:
            {stringInput:none:noneMode::false:🔀}
            {stringInput:song:songMode::false:🔂}
            {stringInput:queue:queueMode::false:🔁}
        }
    }
    {actionRow:
        {button::secondary:previous:false:⏮️}
        {button::secondary:pauseresume:false:⏯️}
        {button::secondary:skip:false:⏭️}
    }
    ;true
]

$sendMessage[{newEmbed:{author:$songInfo[artist]}{description:[$songInfo[title]]($songInfo[url])}{field:Длительность:$songInfo[duration]:true}{field:Добавил:$songInfo[requester.mention]:true}{thumbnail:$songInfo[thumbnail]}{image:$getMVar[line]}{color:$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}}{actionRow:{selectMenu:loopMode:loopMode $loopStatus:1:1:false:{stringInput:none:noneMode::false:🔀}{stringInput:song:songMode::false:🔂}{stringInput:queue:queueMode::false:🔁}}}{actionRow:{button::secondary:previous:false:⏮️}{button::secondary:pauseresume:false:⏯️}{button::secondary:skip:false:⏭️}};true]

*/