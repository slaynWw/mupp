module.exports = [{
    name: "help",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {newEmbed:
                {description:-# ./readme.txt\n\nТёмная сторона данного сервера. Раб системы\nили просто mupp. Самое милое создание на \nданном сервере после моей девушки 💕.}
                {image:$getImage[mupp.help]}
                {color:$getData[embed.color]}
            }
            {actionRow:
                {button:./commands:secondary:commandsID:false}
                {button:./mupp:secondary:muppID:false}
            }
        ;everyone;true;false]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}, {
    name: "commandsID",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[
            {newEmbed:
                {description:-# **./commands/**}
                {field:/utility.js:\`\`\`js\n$readFile[./src/data/mupp/utility.js]\`\`\`:false}
                {field:/music.js:\`\`\`js\n$readFile[./src/data/mupp/music.js]\`\`\`:false}
                {field:/fun.js:\`\`\`js\n$readFile[./src/data/mupp/fun.js]\`\`\`:false}
                {field:/reports.txt\::Насчёт разных ошибок и т.д. писать мне лично\nв лс. <@529790206195269632>:false}
                {image:$getImage[mupp.commands]}
                {color:$getData[embed.color]}
            }
            {actionRow:
                {button::secondary:backID:false:↩️}
            }
        ;true;false]
    `
}, 
/*
                {field:/utility.js:\`\`\`js\n$readFile[./src/data/mupp/utility.js]\`\`\`:false}
                {field:/music.js:\`\`\`js\n$readFile[./src/data/mupp/music.js]\`\`\`:false}
                {field:/fun.js:\`\`\`js\n$readFile[./src/data/mupp/fun.js]\`\`\`:false}
*/
//\n\n-# /utility.js\n</help:1341262319803564043>, </ping:1341262479342440499>, </profile:1341262687341907969>
{
    name: "muppID",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[
            {newEmbed:
                {description:-# ./mupp}
                {field:/description.txt:Миленький бот написанный специально для\nсервера qff с полной отдачей и любовью 💕.:false}
                {field:/core.json:\`\`\`json\n$readFile[./src/data/mupp/core.json]\`\`\`:false}
                {image:$getImage[mupp.botinfo]}
                {color:$getData[embed.color]}
            }
            {actionRow:
                {button::secondary:backID:false:↩️}
                {button:source:link:https\://github.com/slaynWw/mupp:false}
                {button:creator:link:https\://github.com/slaynWw:false}
            }
        ;true;false]
    `
}, {
    name: "backID",
    type: "interaction",
    prototype: "button",
    code: `
        $interactionUpdate[
            {newEmbed:
                {description:-# ./readme.txt\n\nТёмная сторона данного сервера. Раб системы\nили просто mupp. Самое милое создание на \nданном сервере после моей девушки 💕.}
                {image:$getImage[mupp.help]}
                {color:$getData[embed.color]}
            }
            {actionRow:
                {button:./commands:secondary:commandsID:false}
                {button:./mupp:secondary:muppID:false}
            }
        ;true;false]
    `
}]