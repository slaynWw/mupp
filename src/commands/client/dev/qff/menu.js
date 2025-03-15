module.exports = [{
    name: "menu",
    code: `
    $sendMessage[
        {attachment:menu.gif:./src/data/images/menu.gif}
        {actionRow:
            {selectMenu:menuID:Выберите пункт:1:1:false:
                {stringInput:slxnqq:ownerID:Создатель сервера и разработчик этого бота.:false:$getObjectProperty[interface;aboutme]}
                {stringInput:Оптимизация ПК:optimizationID:Видосы/статьи которые мне помогли.:false:$getObjectProperty[interface;optimization]}
                {stringInput:Персонализация:rolesID:Цветные роли & пинги на сервере.:false:$getObjectProperty[interface;customization]}
            }
        }
    ;false]

    $createObject[interface;$getMVar[interface]]

    $onlyIF[529790206195269632==$authorID;
        Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
        {options:
            {reply:$messageID}
        }
    ]
    `
}, {
    name: "menuID",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        {attachment:slaynww.png:./src/data/images/slaynww.png}
        {actionRow:
            {button:setup:secondary:setup:false}
            {button:pc:link:https://pcpartpicker.com/list/rG4yLc:false}
            {button:steam:link:https://steamcommunity.com/id/slaynWw/:false}
            {button:cfg/cs2:link:https://drive.google.com/file/d/1dC6GWqERUgaBzY5IEnPV9fxeK2kEqQeo/view?usp=sharing:false}
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
        {newEmbed:
            {description:\`\`\`Напомню, делаете всё на свой страх и риск, \nответственность за ваш комп я никакой \nне несу.\`\`\`\n\`\`\`Самый лучшый способ выжать максимум из\nваших комплектующих, это поставить чистую\nдесятку только с контрой и вырезать всё\nчто можно. А пользоваться полноценно\nдругой виндой.\`\`\`}
            {field:Программы:[BoosterX](https://boosterx.org/en/)\n [win10 tweaker](https://win10tweaker.ru/):true}
            {field:Видосы:[Две системы на одном ПК](https://www.youtube.com/watch?v=jb7jusFYQaY)\n[Быстрая оптимизация Windows 11 и 10!](https://www.youtube.com/watch?v=gQ8pqnySAwk):true}
            {field:Гайды в стиме:[Настройка и оптимизации Windows и CS2](https://steamcommunity.com/sharedfiles/filedetails/?id=1651078798)\n[Настройка PUBG и как выжать из PC МАКСИМУМ FPS!](https://steamcommunity.com/sharedfiles/filedetails/?l=german&id=1594401155):false}
            {color:$getMVar[embedColor]}
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
        {attachment:roles.gif:./src/data/images/roles.gif}
        {actionRow:
            {selectMenu:rolesList:Цвет никнейма.:1:1:false:
                {stringInput:#f5f5f5:yin::false:<\:white\:1349397967269920849>}
                {stringInput:#2e2e2e:yang::false:<\:black\:1349397975859855370>}
                {stringInput:#fab6ff:pinky::false:<\:pinky\:1349398099239637032>}
                {stringInput:#f89eff:fluorescent::false:<\:fluorescent\:1349398091245293598>}
                {stringInput:#c9a9ee:plum::false:<\:plum\:1349398082642776164>}
                {stringInput:#bb83ff:amethyst::false:<\:amethyst\:1349398074975457380>}
                {stringInput:#90acff:berry::false:<\:berry\:1349398069401358396>}
                {stringInput:#608aff:midnight::false:<\:midnight\:1349398063080276018>}
                {stringInput:#66cee7:aqua::false:<\:aqua\:1349398053827907584>}
                {stringInput:#a7deec:turquoise::false:<\:turquoise\:1349398044658897008>}
                {stringInput:#a9eec4:mint::false:<\:mint\:1349398032331837492>}
                {stringInput:#70db9b:parakeet::false:<\:parakeet\:1349398025298251836>}
                {stringInput:#e7cf90:pancake::false:<\:pancake\:1349398018167803955>}
                {stringInput:#fdd86f:sunshine::false:<\:sunshine\:1349398010768920681>}
                {stringInput:#eecea9:sunrise::false:<\:sunrise\:1349398003156258847>}
                {stringInput:#e7a688:peach::false:<\:peach\:1349397995833000006>}
                {stringInput:#eea9a9:strawberry::false:<\:strawberry\:1349397988308553778>}
                {stringInput:#e57272:cherry::false:<\:cherry\:1349397982210162790>}
            }
        }
        {actionRow:
            {selectMenu:eventsList:Пинги о событиях.:1:1:false:
                {stringInput:Twitch:twitch:Оповещение о стримах и т.п.:false:<\:twitch\:1349401559821455391>}
                {stringInput:Events:events:Какой либо ивент на сервере. Shkoloshield?:false:<\:events\:1349401552665710612>}
            }
        }
        ;everyone;true;false
    ]

    $onlyIf[$interactionData[values[0]]==rolesID;]
    `
}, {
    name: "setup",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[
        {newEmbed:
            {author:VGN Dragonfly F1 MOBA:https://brightstarcomp.com/cdn/shop/collections/VGN.png?v=1725959987}
            {thumbnail:https://vgnlab.com/cdn/shop/files/F1Moba-White45.jpg?v=1691996030&width=600}
            {description:1.5 г. пользуюсь данной мышкой, пару раз отваливалось колесо, приходилось чистить что-бы прокрутка работала, под конец января сдохла нахуй кнопка mouse3 и после месяца само по себе починилось. А так держит акум нормально, плюсом 4к донгл и нихуёвый софт. Вес как по мне тоже заебок.}
            {field:Выводы:Хуйня полная. Стоила бы дешевле, тогда похуй было бы.:true}
            {field:Покупал за:79.89€ + 14.83€:true}
            {image:$getMVar[line]}
            {color:$getMVar[embedColor]}
        }
        {newEmbed:
            {author:Dark Project KD104A:https://yt3.googleusercontent.com/vMqhCQ3fWrCuk0Mbmg8EYHi2gCW_CHgof-7ud7_-hGAtPRRc0YdOIPXJa1bOUNRvhlji2xiqwg=s900-c-k-c0x00ffffff-no-rj}
            {thumbnail:https://old.darkproject.eu/images/thumbnails/540/405/detailed/9/DPO-KD-104A-106100-GYL_2.png}
            {description:Пользуюсь вроде бы около 3-4 лет. Софт полу-калище, моментами крашит хуй пойми почему, но в принципе юзабелен. С завода не работает один свитч на нумпаде. А так чё, Gateron Yellow свитчи, даблшот пбт капы. Белый цвет ввиде розового. Без хот свапа. На момент покупки для меня этот вариант был лучшим среди других.}
            {field:Выводы:На тот момент лучше не было. А так лучше взять всё кроме этой хуйни.:true}
            {field:Покупал за:~70-80€:true}
            {image:$getMVar[line]}
            {color:$getMVar[embedColor]}
        }
        {newEmbed:
            {author:Fifine K669:https://pbs.twimg.com/profile_images/1334755608067600384/HsSisu-x_400x400.png}
            {thumbnail:https://www.alifstores.com/media/catalog/product/4/m/4mm08080010019xxx.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700}
            {description:Самая старая моя покупка, но при этом самая ахуенная. Купил его в 2018 году, активно юзать начал в 2020. Ронял, пиздил, заливал, на всё ему похуй, работает так же ахуенно как и раньше. Недавно прикупил кранштейн с пауком, теперь вообще кайф.}
            {field:Выводы:На сегоднящний день, я бы его не брал, хоть он звучит не плохо.:true}
            {field:Покупал за:25€ + 30€:true}
            {image:$getMVar[line]}
            {color:$getMVar[embedColor]}
        }
        {newEmbed:
            {author:Chinami Kono - Pain:https://www.custommade.ru/images/logos/logo-cm-black-crop.png}
            {thumbnail:https://www.custommade.ru/uploads/products/9b0/4d1/528/231/231-902-big.png}
            {description:Ахуенный коврик, очень мне нравится своим рисунком, жаль с оффициального сайта не смог заказать, а так заказал с алика. Ни о чём не жалею.}
            {field:Выводы:Просто ахуенный коврик, под ахуенный сетапчик.:true}
            {field:Покупал за:18.34€:true}
            {image:$getMVar[line]}
            {color:$getMVar[embedColor]}
        }  
        {newEmbed:
            {author:Razer Barracuda X - Mercury (2021):https://cdn.freebiesupply.com/logos/large/2x/razer-logo-png-transparent.png}
            {thumbnail:https://lt2.pigugroup.eu/colours/564/392/94/56439294/razer-barracuda-x-mercury-2021-75d63_reference.jpg}
            {description:Купил ближе к началу декабря 2024, как по мне ахуенные наушники, среди аналогов за свою цену ебут всё что можно. 100 мисок риса/100. Жаль только софта на комп нету. Держут 50 часов активной борьбы, лёгкие и удобные.}
            {field:Выводы:На данный момент самая моя удачная покупка. Среди аналогов за свою цену, рвут всё что можно.:true}
            {field:Покупал за:88,90€:true}
            {image:$getMVar[line]}
            {color:$getMVar[embedColor]}
        }
        {newEmbed:
            {author:Lenovo Legion R27FC-30 240Hz:https://images.seeklogo.com/logo-png/46/2/lenovo-logo-png_seeklogo-463318.png}
            {thumbnail:https://p2-ofp.static.pub/ShareResource/indirect/Visuals/images/r-series/r27fc-30/03_Legion_R27fc-30_Front_Normal_Position.png}
            {description:На момент поломки старого монитора, этот был лучшим за свою цену. Присутсвует слабо заметный гостинг, который вообще никак не мешает играть. Моник кайф.}
            {field:Выводы:Было бы больше денег, купил бы IPS и нормальный, не изогнутый. Но тоже пойдёт.:true}
            {field:Покупал за:233.44€:true}
            {image:$getMVar[line]}
            {color:$getMVar[embedColor]}
        }
        {actionRow:
            {button:Вернуться:secondary:back:false:↩️}
        }
        ;true;false
    ]
    `
}, {
    name: "back",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[
        {attachment:slaynww.png:./src/data/images/slaynww.png}
        {actionRow:
            {button:setup:secondary:setup:false}
            {button:pc:link:https://pcpartpicker.com/list/rG4yLc:false}
            {button:steam:link:https://steamcommunity.com/id/slaynWw/:false}
            {button:cfg/cs2:link:https://drive.google.com/file/d/1dC6GWqERUgaBzY5IEnPV9fxeK2kEqQeo/view?usp=sharing:false}
        }
        ;true;false
    ]
    `
}]