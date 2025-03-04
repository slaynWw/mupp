module.exports = {
    name: "test", 
    aliases: ["t"],
    code: `
        $downloadCanvas[tipped;./src/data/tipped.png]

            $fillText[tipped;$get[username2];$get[color2];20px hypatiasanspro;299;161;128;center]
            $drawImage[tipped;$nonEscape[$userAvatar[$get[user];;false;png]];237;12;124;124]

            $fillText[tipped;$get[username1];$get[color1];20px hypatiasanspro;74;161;128;center]
            $drawImage[tipped;$nonEscape[$userAvatar[$authorID;;false;png]];12;12;124;124]

            $drawImage[tipped;$getMVar[tippedImage];0;0;373;176]

        $createCanvas[tipped;373;176]

        $setUserMVar[getTips;$sum[$getUserMVar[getTips;$get[user]];1];$get[user]]
        $setUserMVar[playerTipped;$sum[$getUserMVar[playerTipped;$authorID];1];$authorID]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$authorID];1];$authorID]

        $let[username2;$if[$userNickname[$guildID;$get[user];false]==;$username[$get[user]];$userNickname[$guildID;$get[user];false]]]
        $let[username1;$if[$userNickname[$guildID;$authorID;false]==;$username[$authorID];$userNickname[$guildID;$authorID;false]]]
        $let[user;$authorID]

        $let[color2;$randomText[#2757b3;#44a57b;#880788;#9e9f0e;#b45004]]
        $let[color1;$randomText[#b3638a;#788838;#458f9f;#02781f;#805504]]

        $onlyIF[529790206195269632==$authorID;
            Упс... Что-то пошло не так...\n-# Вы не являетесь разработчиком бота.
            {options:
                {reply:$messageID}
            }
        ]
    `
}