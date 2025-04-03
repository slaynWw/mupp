module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {description:-# ./commands/utilities/ping.js}
                {field:console.exe:\`\`\`json\nclient ping\: $interactionPingms\ndatabase ping\: $round[$mongoPing]ms\n$if[$playerPing!=-1;voice ping\: $playerPingms\n;]api ping\: $round[$guildShardPing]ms\n\nall ping\: $get[all]ms - Shard $guildShardID\`\`\`:false}
                {image:$getImage[mupp.ping]}
                {color:$getData[embed.color]}
            }
            ;everyone;false;false
        ]

        $let[all;$round[$math[$interactionPing+$mongoPing+$if[$playerPing!=-1;$playerPing;0];$guildShardPing]]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}]

//Bot latency\: \`$interactionPingms\`\nDatabase latency\: \`$round[$mongoPing]ms\`\nDiscord API latency\: \`$round[$guildShardPing]ms\` (Shard \`$guildShardID\`)