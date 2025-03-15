module.exports = {
    name: "resetVar", 
    aliases: ["rv"],
    code: `
        $setMVar[emojis;{
            "spotify": "<:spotify:1342307966828675192>",
            "soundcloud": "<:soundcloud:1342308522754572338>",
            "youtube": "<:youtube:1342308059233652738>",
            "vkmusic": "<:vkmusic:1345388303834288169>",
            "yandexmusic": "<:yandexmusic:1345422426237960254>",
            "gold": "<:gold:1342327846936514662>",
            "discord": "<:discord:1342414536967192626>",
            "qff": "<:qff:1342414492469821451>",
            "shards": "<:shards:1342543982210584618>",
            "blackheart": "<a:blackheart:1343065377004978238>",
            "whiteheart": "<a:whiteheart:1343065327285702677>",
            "greyheart": "<a:greyheart:1343065313666793553>",
            "butterfly": "<a:butterfly:1343065347019903079>",
            "heartarrow": "<a:heartarrow:1343065301646049391>",
            "onigiri": "<a:onigiri:1343065225439477890>",
            "whitebow": "<a:whitebow:1343065214450536528>",
            "heartspakles": "<a:heartspakles:1343065201926340648>",
            "whiteumbrella": "<a:whiteumbrella:1343065191205568572>",
            "torodrink": "<a:torodrink:1343065142715220008>",
            "pixelmoth": "<a:pixelmoth:1343065100319330345>",
            "angelwings": "<a:angelwings:1343065091855089787>",
            "whiterose": "<a:whiterose:1343065083248644126>"
        }]

        $setMVar[playerImages;{
            "voiceIcon": "https://i.imgur.com/sRzcj3i.png",
            "voiceBackground": "https://i.imgur.com/iMt73MN.png",
            "blackGradient": "https://i.imgur.com/9SOPb1b.png",
            "black": "https://i.imgur.com/9LkGIdH.png",
            "spotify": "https://i.imgur.com/NTzhQVc.png",
            "soundcloud": "https://i.imgur.com/o4qexDv.png",
            "youtube": "https://i.imgur.com/rEfFvRl.png"
        }]

        $setMVar[interface;{
            "leave": "<:leave:1350311181973192834>",
            "join": "<:join:1350311174389891195>",
            "true": "<:true:1350311221232140319>",
            "false": "<:false:1350311167750307930>",
            "cluster": "<:cluster:1350306173957570590>",
            "shard": "<:shard:1350306300499857459>",
            "optimization": "<:optimization:1350311195474661399>",
            "aboutme": "<:aboutme:1350308915660718152>",
            "customization": "<:customization:1350311152835493888>",
            "error": "<:error:1350311161631084617>",
            "previous": "<:previous:1350326766673203200>",
            "skip": "<:skip:1350326778169659432>",
            "pauseresume": "<:pauseresume:1350326791168069654>",
            "stop": "<:stop:1350326807395827712>",
            "queue": "<:queue:1350327151773225032>"
        }]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$authorID];1];$authorID]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}