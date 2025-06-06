module.exports = [{
    name: "tip",
    type: "interaction",
    prototype: "slash",
    code: `
        $deleteFile[./src/data/images/tipped.png]
        $deleteMessage[$get[msg];$channelID]

        $wait[8s]

        $let[msg;$interactionFollowUp[{attachment:tip.png:./src/data/images/tipped.png};false;true]]
        $interactionDefer[false]

        $downloadCanvas[tipped;./src/data/images/tipped.png]
            $fillText[tipped;$get[username2];$get[color2];20px hypatiasanspro;299;161;128;center]
            $drawImage[tipped;$nonEscape[$userAvatar[$get[user];;false;png]];237;12;124;124]
            $fillText[tipped;$get[username1];$get[color1];20px hypatiasanspro;74;161;128;center]
            $drawImage[tipped;$nonEscape[$userAvatar[$interactionData[author.id];;false;png]];12;12;124;124]
            $drawImage[tipped;$nonEscape[$getImage[tippedImage]];0;0;373;176]
        $createCanvas[tipped;373;176]

        $setUserMVar[getTips;$sum[$getUserMVar[getTips;$get[user]];1];$get[user]]
        $setUserMVar[playerTipped;$sum[$getUserMVar[playerTipped;$interactionData[author.id]];1];$interactionData[author.id]]
        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]

        $let[username2;$if[$userNickname[$guildID;$get[user];false]==;$username[$get[user]];$userNickname[$guildID;$get[user];false]]]
        $let[username1;$if[$userNickname[$guildID;$interactionData[author.id];false]==;$username[$interactionData[author.id]];$userNickname[$guildID;$interactionData[author.id];false]]]
        $let[user;$slashOption[user]]

        $onlyIf[$slashOption[user]!=$authorID;Упс... Что-то пошло не так...\n-# Нельзя типнуть самого себя.{options:{interaction}}{extraOptions:{ephemeral}}]
        $onlyIf[$isBot[$slashOption[user]]!=true;Упс... Что-то пошло не так...\n-# Нельзя типнуть бота.{options:{interaction}}{extraOptions:{ephemeral}}]

        $let[color2;$randomText[#2757b3;#44a57b;#880788;#9e9f0e;#b45004]]
        $let[color1;$randomText[#b3638a;#788838;#458f9f;#02781f;#805504]]

        $onlyIf[$getMVar[categoryFun]==false;
            Упс... Что-то пошло не так...\n-# Данная команда выключена.
            {options:
                {interaction}   
            }
            {extraOptions:
                {ephemeral}
            }
        ]
    `
}]