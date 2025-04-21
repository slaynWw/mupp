module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {description:-# ./commands/utilities/ping.js}
                {field:console.log:\`\`\`json\nDiscord API\: $get[api]ms\nDatabase\: $get[db]ms $if[$voiceID[$clientID]!=;\nVoice\: $round[$playerPing]ms;]\n\nMessage response - $get[all]ms\`\`\`:false}
                {image:$getImage[mupp.ping]}
                {color:$getData[embed.color]}
            }
            ;everyone;false;false
        ]

        $let[all;$math[$get[api]+$get[db]]]

        $let[api;$round[$guildShardPing]]
        $let[db;$round[$mongoPing]]
        $let[vc;$round[$playerPing]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}]