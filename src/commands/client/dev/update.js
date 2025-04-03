module.exports = [{
    name: "update",
    aliases: ["reload", "upd"],
    code: `
        $let[1;$updateCommands]
        $sendMessage[
            {newEmbed:
                {description:-# ./commands/dev/reload.js}
                {field:console.exe:\`\`\`json\ncl\: $messagePingms\ndb\: $round[$mongoPing]ms\n$if[$playerPing!=-1;v\: $playerPingms\n;]api\: $round[$guildShardPing]ms\n\nall\: $get[all]ms\n\nAll commands reloaded!\`\`\`:false}
                {image:$getImage[mupp.ping]}
                {color:$getData[embed.color]}
            }
            {options:
                {reply:$messageID}
                {deleteIn:5s}
                {deleteCommand}
            }
        ]

        $let[all;$round[$math[$messagePing+$mongoPing+$if[$playerPing!=-1;$playerPing;0]+$guildShardPing]]]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}];