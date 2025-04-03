module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {description:-# ./commands/utilities}
                {field:/ChalresNaig.node:\`\`\`json\nstatus\: $nodeInfo[CharlesNaig;status]\nplayers\: $nodeInfo[CharlesNaig;player.used]/$nodeInfo[CharlesNaig;player.total]\`\`\`:false}
                {field:/Ajieblogs.node:\`\`\`json\nstatus\: $nodeInfo[Ajieblogs;status]\nplayers\: $nodeInfo[Ajieblogs;player.used]/$nodeInfo[Ajieblogs;player.total]\`\`\`:false}
                {field:/readme.txt:На данный момент в боте используются только\nбесплатные общедоступные ноды.:false}
                {image:$getImage[mupp.status]}
                {color:$getData[embed.color]}
            }
            ;false;false
        ]

        $interactionDefer[false]
            
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
};