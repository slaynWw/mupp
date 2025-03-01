module.exports = [{
    name: "ping",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
        $interactionReply[
            {newEmbed:
                {title:Cluster 1}
                {description:Bot latency\: \`$interactionPingms\`\nDatabase latency\: \`$round[$mongoPing]ms\`\nDiscord API latency\: \`$round[$guildShardPing]ms\` (Shard \`$guildShardID\`)}
                {footer:All latency $round[$get[ping]]ms}
                {color:$getMVar[embedColor]}
            }
            ;everyone;false;false
        ]

        $let[ping;$sum[$sum[$interactionPing;$mongoPing];$guildShardPing]]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}]