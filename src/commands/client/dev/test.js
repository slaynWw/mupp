module.exports = {
    name: "test", 
    aliases: ["t"],
    code: `
        $sendMessage[{actionRow:{selectMenu:loopMode:Repeat none:1:1:false:{stringInput:off:noneMode::true:❌}{stringInput:queue:queueMode::false:🔁}{stringInput:single:songMode::false:🔂}}}{actionRow:{button::secondary:stop:false:⏹️}{button::secondary:previous:false:⏮️}{button::secondary:pauseresume:false:⏸️}{button::secondary:skip:false:⏭️}{button::secondary:queueButton:false:#️⃣}}{attachment:player.png:./src/data/player.png};false]
        
        $downloadCanvas[player;./src/data/player.png]
            $drawImage[player;$get[platform];12;12;24;24]
            $fillText[player;$get[title];#ffffff;25px productsansbold;12;160]
            $fillText[player;$get[author];#b8b8b8;13px productsansregular;12;176]
            $drawImage[player;$getObjectProperty[playerImages;blackGradient];0;-81;400;400;10]
            $drawImage[player;$getObjectProperty[playerImages;black];0;-81;400;400;10]
            $filter[player;remove;blur]

            $drawImage[player;$get[thumbnail];0;-81;400;400;10]
            $filter[player;set;blur;2]
        $createCanvas[player;400;188]

        $let[title;$songInfo[title]]
        $let[author;$songInfo[author]]
        $let[thumbnail;$songInfo[thumbnail]]
        $let[platform;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;$getObjectProperty[playerImages;spotify]];soundcloud;$getObjectProperty[playerImages;soundcloud]];youtube;$getObjectProperty[playerImages;youtube]]]
        $let[voice;$channelName[$voiceID[$authorID]]]

        $createObject[playerImages;$getMVar[playerImages]]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}