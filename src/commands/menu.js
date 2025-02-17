module.exports = [{
    name: "menu",
    code: `
    $getVar[banner]
    $addSelectMenu[1;string;menuID;Выберите пункт;1;1;false;
        Роли:Цветные роли.:rolesID:false:<a\:whiterose\:1328770133274919083>;
        slxnqq?:Инфа, конфиги и т.п.:ownerID:false:<a\:butterflies\:1327681585658597396>;
        О сервере:Инфа чтоб легче освоится.:guildID:false:<a\:Ribbon\:1327682663024300103>;
        Оптимизация ПК:Чтоб жизнь козалось красочней.:optimizationID:false:<a\:spinningheart\:1327682841252724757>
    ]
    `
}, {
    name: "menuID",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        {newEmbed:
            {author:slaynww/slxnqq/даня:$userAvatar[529790206195269632]}
            {description:\`\`\`Не женщина, 16 лет, из Литвы.\`\`\`}
            {field:ПК:\`\`\`yaml\nCPU\: Ryzen 5 5600\nGPU\: ASUS DUAL RX6600\nRAM\: PATRIOT Viper 4 2x8GB\nROM\: ADATA LEGEND 960 1TB & NN SSD 512GB\nPSU\: COOLER MASTER 750W\nMB\: GIGABYTE B550 GAMING X V2\n\nOS(main)\: Windows11\nOS(for cs)\: Windows10\`\`\`:false}
            {field:Девайсы:\`\`\`yaml\nMice\: VGN Dradgofly F1 MOBA & 4k dongle\nKeyboard\: Dark Project KD104A\nMousepad\: Varmilo Daisy Desk \nMicrophone\: Fifine K669\nMonitor\: LENOVO LEGION R27FC-30\`\`\`:false}
            {field:Ссылки:[cs2/cfg](https://google.com) [steam](https://steamcommunity.com/id/slaynWw/) [faceit](https://www.faceit.com/ru/players/SlaYn_x) [spotify](https://open.spotify.com/user/31arfxinfglqbibxcnfyxyadwb7q) [twitch](https://www.twitch.tv/slaynww):false}
            {color:$getVar[embedColor]}
        }
        ;everyone;true;false
    ]

    $onlyIf[$interactionData[values[0]]==ownerID;]
    `
}, {
    name: "menuID",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        {actionRow:
            {selectMenu:guildList:Что вас интересует?:1:1:false:
                {stringInput:Правила:rulesID::false:<a\:Ribbon\:1327682663024300103>}
                {stringInput:Роли на сервере:rolesListID::false:<a\:whiterose\:1328770133274919083>}
            }
        }
        ;everyone;true;false
    ]

    $onlyIf[$interactionData[values[0]]==guildID;]
    `
}, {
    name: "guildList",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionReply[https://cdn.discordapp.com/attachments/1263967351976759470/1327647209965097000/af4d59975aee7bed.mp4?ex=6783d351&is=678281d1&hm=1ef81352a0bedd53ae2b17bbcdebc8b7056caec9ede5d86d2f08bd9048fa0421&;everyone;true;false]
    
        $onlyIf[$interactionData[values[0]]==rulesID;]
    `
}, {
    name: "guildList",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionReply[
            {newEmbed:
                {description:<@&1328120131347415130>\n> Роль для меня (<@529790206195269632>) и моей любимки (<@917740250992881724>).\n\n<@&1335818826142449705>\n> Права администратора на этом сервере. Админ пидорас.\n\n<@&983405912955961495>\n> Закинул бусты на сервак, залутал 52, 42 и +реп от пацанов.\n\n<@&1024379159880937552>\n> Скоро пенсия.\n\n<@&965642635031228476>\n> Обычная роль для рядовых юзеров.\n\n<@&966126859676966932>\n> Ебаные вычеслительные мощнонсти.}
                {color:$getVar[embedColor]}
                {image:$getVar[rolesBanner]}
            }
            ;everyone;true;false
        ]
    
        $onlyIf[$interactionData[values[0]]==rolesListID;]
    `
}, {
    name: "menuID",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        {newEmbed:
            {description:\`\`\`Напомню, делаете всё на свой страх и риск, \nответственность за ваш комп я никакой \nне несу.\`\`\`\n\`\`\`Самый лучшый способ выжать максимум из\nваших комплектующих, это поставить чистую\nдесятку только с контрой и вырезать всё\nчто можно. А пользоваться полноценно\nдругой виндой.\`\`\`}
            {field:Программы:[BoosterX](https://boosterx.org/en/)\n [win10 tweaker](https://win10tweaker.ru/):true}
            {field:Видосы:[Две системы на одном ПК](https://www.youtube.com/watch?v=jb7jusFYQaY)\n[Быстрая оптимизация Windows 11 и 10!](https://www.youtube.com/watch?v=gQ8pqnySAwk):true}
            {field:Гайды в стиме:[Настройка и оптимизации Windows и CS2](https://steamcommunity.com/sharedfiles/filedetails/?id=1651078798)\n[Настройка PUBG и как выжать из PC МАКСИМУМ FPS!](https://steamcommunity.com/sharedfiles/filedetails/?l=german&id=1594401155):false}
            {color:$getVar[embedColor]}
        }
        ;everyone;true;false
    ]

    $onlyIf[$interactionData[values[0]]==optimizationID;]
    `
}, {
    name: "menuID",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        $getVar[rolesBanner]
        {actionRow:
            {selectMenu:rolesList:Выберите цвет.:1:1:false:
                {stringInput:yin:yin::false:🤍}
                {stringInput:yang:yang::false:🖤}
                {stringInput:pinky:pinky::false:🍧}
                {stringInput:fluorescent:fluorescent::false:🍥}
                {stringInput:plum:plum::false:🌂}
                {stringInput:amethyst:amethyst::false:🔮}
                {stringInput:berry:berry::false:🫐}
                {stringInput:midnight:midnight::false:🌃}
                {stringInput:aqua:aqua::false:💦}
                {stringInput:turquoise:turquoise::false:💎}
                {stringInput:mint:mint::false:🍃}
                {stringInput:parakeet:parakeet::false:🦜}
                {stringInput:pancake:pancake::false:🥞}
                {stringInput:sunshine:sunshine::false:☀️}
                {stringInput:sunrise:sunrise::false:🌄}
                {stringInput:peach:peach::false:🍑}
                {stringInput:strawberry:strawberry::false:🍓}
                {stringInput:cherry:cherry::false:🍒}
            }
        }
        ;everyone;true;false
    ]

    $onlyIf[$interactionData[values[0]]==rolesID;]
    `
}]

/*
$let[roles;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userRoles[$authorID;$guildID;id;];965642635031228476;];1024379159880937552;];1335811578741788836;];1335818826142449705;];1328120131347415130;]]
$let[roles;
    $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userRoles[$authorID;$guildID;id;];965642635031228476;];1024379159880937552;];1335811578741788836;];1335818826142449705;];1328120131347415130;]
]
*/