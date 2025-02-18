module.exports = {
    name: 'leave',
    aliases: ['l', 'dc', 'disconnect'],
    $if: "old",
    code: `
        Бот покинул голосовой канал.\n-# Чтобы добавить трек используйте .play <song>
        $reply[$messageID;false]

        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $deleteNowPlaying
            $deleteMessage[$get[msgID];$channelID]
            $destroyPlayer
        $else
            $disconnect
        $endif

        $let[msgID;$readFile[./src/data/message.txt]]

        $onlyIf[$voiceID[$clientID]!=;
            Упс... Что-то пошло не так...\n-# Бот не подключен к голосовому каналу.
            {options:
                {reply:$messageID}
            }
        ]
    `
};