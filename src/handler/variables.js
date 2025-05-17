module.exports = {
    //user_stats
    getTips: 0,
    voiceID: "",
    voiceTime: 0,
    voiceJoined: 0,
    playerTipped: 0,
    messageCount: 0,
    commandsUsed: 0,
    sendedMessageCount: 0,
    receivedMessageCount: 0,

    //user_profile
    profileMessageID: "",
    profileUserID: "",
    fieldTitle: "Нажмите ⚙️",
    fieldDescription: "Что-бы настроить текст бокс",

    //anonymousMessages
    AMrecipient: "",

    //music
    playerID: "",
    loop: false,

    //commands
    categoryFun: false,
    categoryMusic: false,
    categoryUtility: false
}


/* 
module.exports = {
    ownerID: "529790206195269632",

    //client
        //setup
        helpMenu: {
            "Utility": {
                "help": "</help:$getApplicationCommandID[help;global]>",
                "ping": "</ping:$getApplicationCommandID[ping;global]>",
                "profile": "</profile:$getApplicationCommandID[profile;global]>"
            },
            "Fun": {
                "flip": "</flip:$getApplicationCommandID[flip;global]>",
                "roll": "</roll:$getApplicationCommandID[roll;global]>",
                "say": "</say:$getApplicationCommandID[say;global]>",
                "send": "</send:$getApplicationCommandID[send;global]>"
            },
            "Music": {
                "play": "</play:$getApplicationCommandID[play;global]>",
                "queue": "</queue:$getApplicationCommandID[queue;global]>",
                "join": "</join:$getApplicationCommandID[join;global]>",
                "leave": "</leave:$getApplicationCommandID[leave;global]>",
                "status": "</status:$getApplicationCommandID[status;global]>",
                "lyrics": "</lyrics:$getApplicationCommandID[lyrics;global]>",
                "nowplaying": "</lyrics:$getApplicationCommandID[nowplaying;global]>"
            }
        },
        emojis: {
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
        },
        playerImages: {
            "voiceIcon": "https://i.imgur.com/sRzcj3i.png",
            "voiceBackground": "https://i.imgur.com/iMt73MN.png",
            "blackGradient": "https://i.imgur.com/9SOPb1b.png",
            "black": "https://i.imgur.com/9LkGIdH.png",
            "spotify": "https://i.imgur.com/NTzhQVc.png",
            "soundcloud": "https://i.imgur.com/o4qexDv.png",
            "youtube": "https://i.imgur.com/rEfFvRl.png"
        },
        interface: {
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
            "previous": "<:backward:1352958078202548224>",
            "skip": "<:forward:1352958085387391027>",
            "pauseresume": "<:pauseresume:1350326791168069654>",
            "stop": "<:stop:1352958099845152790>",
            "queue": "<:queue:1350327151773225032>",
            "player": {
                "paused": "<:play:1350620536153047092>",
                "playing": "<:pause:1352957243204567052>"
            },
            "loop": {
                "off": "<:repeatoff:1352958903402500197>",
                "queue": "<:repeat:1352958911392649289>",
                "song": "<:repeatsingle:1352958926022381621>"
            }
        },

    //user
        //profile
        profile: false,
        customBadges: "",
        fieldTitle: "Что-бы изменить используйте /profile и нажмите на меню ниже.",
        fieldDescription: "текст бокс для профиля пользователя в боте slxxxx.",
    
        //stats
        getTips: 0, //получено типов
        voiceTime: 0,
        voiceJoined: 0,
        playerTipped: 0, //типнуто пользователей
        messageCount: 0, //отправлено сообщений
        commandsUsed: 0, //ипользовано команд
        sendedMessageCount: 0, //отправлено анонимных сообщений
        receivedMessageCount: 0, //получено анонимных сообщений

    //embed
        embedColor: "b9bec9",
        embedError: "c9b9b9",
        bronzeColor: "#b76014",
        silverColor: "#b1e0e7",
        goldColor: "#d3b221",
        platinumColor: "#98f4fc",
        masterColor: "#663975",
        grandmasterColor: "#af141d",
        scicon: "https://cdn.discordapp.com/attachments/1263969081967775764/1344013441668747335/SoundCloud-Logo.png?ex=67bf5d8f&is=67be0c0f&hm=ca2a0693ec526a7f878b686f76e60300d5199aca203643e70e3fbc94d5e0fc28&",
        sficon: "https://cdn.discordapp.com/attachments/1263969081967775764/1344013428230197341/Spotify_Primary_Logo_RGB_Green.png?ex=67bf5d8b&is=67be0c0b&hm=7cb0c71c47496f5361e638e3864cdf44b42a544f6e3263379b3ffe0caca3562c&",
        yticon: "https://cdn.discordapp.com/attachments/1263969081967775764/1344013465790058578/social-06-512.png?ex=67bf5d94&is=67be0c14&hm=1b2a9754cfb1acc0e51d57729b8d770183a9fa38560a585939ad8eb27f2e442a&",
        tippedImage: "https://i.imgur.com/KyeedWg.png",
        line: "https://cdn.discordapp.com/attachments/1263969081967775764/1324336436467466302/dbaa74710a2b3110.png?ex=678e316b&is=678cdfeb&hm=1b6349940fbb6924df493f13b523dabbdfbc7226cfbf9441637158b81c677a44&",
        banner: "https://cdn.discordapp.com/attachments/1263969081967775764/1335237138949607556/navigation_new.png?ex=679f6ffd&is=679e1e7d&hm=a71e345daeeca4cef23e27432de84c2fffc3004d4849629c4c618aa27baa051e&",
        rolesBanner: "https://cdn.discordapp.com/attachments/1263969081967775764/1335237126463426711/roles_new.png?ex=679f6ffa&is=679e1e7a&hm=4e5fb067cf863130fb328d2ff0fb81fffaaf01960e3bcaf86202f335bd143973&"
}
*/