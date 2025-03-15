module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $interactionReply[
            {newEmbed:
                {author:Amethyst:https://i.imgur.com/gNQsSaP.png}
                {description:Bot latency\: \`$interactionPingms\`\nDatabase latency\: \`$round[$mongoPing]ms\`\nDiscord API latency\: \`$round[$guildShardPing]ms\` (Shard \`$guildShardID\`)}
                {footer:All latency $round[$get[ping]]ms}
                {color:$getMVar[embedColor]}
            }
            ;everyone;false;false
        ]

        $let[ping;$sum[$sum[$interactionPing;$mongoPing];$guildShardPing]]
        $createObject[interface;$getMVar[interface]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}]