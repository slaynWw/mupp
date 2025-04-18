module.exports = {
    name: 'status',
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionFollowUp[
            {newEmbed:
                {description:-# ./commands/utilities}
                {field:/$get[node].node:\`\`\`json\nstatus\: $nodeInfo[$get[node];status]\nplayers\: $nodeInfo[$get[node];player.used]/$nodeInfo[$get[node];player.total]\`\`\`:false}
                {field:/readme.txt:На данный момент в боте используются только\nбесплатные общедоступные ноды.\n\nСкорее всего своих нод не будет, так как я мать\nебал в этой постоянно ломающейся хуйне\nразбираться.:false}
                {image:$getImage[mupp.status]}
                {color:$getData[embed.color]}
            }
            ;false;false
        ]

        $interactionDefer[false]

        $let[node;inzeworld]
            
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
};