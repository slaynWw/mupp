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
            "whiterose": "<a:whiterose:1343065083248644126>",
            "divinerapier": "<:divinerapier:1343083635712069674>",
            "animalcourier": "<:animalcourier:1343083643039514624>",
            "madstone": "<:madstone:1343083650010320906>",
            "aegis": "<:aegis:1343083656763281438>",
            "aghanimsblessing": "<:aghanimsblessing:1343083665227386952>",
            "handofmidas": "<:handofmidas:1343083673297092672>",
            "aghanimsshard": "<:aghanimsshard:1343083680423477278>",
            "bookofagility": "<:bookofagility:1343094671697514498>",
            "bookofintelligence": "<:bookofintelligence:1343094663581536328>",
            "bookofstrength": "<:bookofstrength:1343094657084817479>",
            "agility": "<:agility:1343096236068311160>",
            "intelligence": "<:intelligence:1343096230321848350>",
            "strength": "<:strength:1343096222046486569>",
            "universal": "<:universal:1343176264151863356>",
            "ogre_magi": "<:ogre_magi:1343185579889655839>",
            "shadow_fiend": "<:shadow_fiend:1343187648230981694>",
            "venomancer": "<:venomancer:1343187779093270549>",
            "outworld_destroyer": "<:outworld_destroyer:1343187786194354227>"
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

        $setMVar[tippedImage;https://i.imgur.com/KyeedWg.png]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$authorID];1];$authorID]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}