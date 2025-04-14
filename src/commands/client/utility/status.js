module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {description:-# ./commands/utilities}
                {field:/toddy.node:\`\`\`json\nstatus\: $nodeInfo[$get[node];status]\nplayers\: $nodeInfo[$get[node];player.used]/$nodeInfo[$get[node];player.total]\`\`\`:false}
                {field:/readme.txt:На данный момент в боте используются только\nбесплатные общедоступные ноды.:false}
                {image:$getImage[mupp.status]}
                {color:$getData[embed.color]}
            }
            ;false;false
        ]

        $interactionDefer[false]

        $let[node;Catfein]
            
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
};