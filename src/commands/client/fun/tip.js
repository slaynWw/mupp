module.exports = [{
    name: "tip",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionReply[
            {attachment:tip.png:./src/data/tip.png}
            ;everyone;false;false
        ]

        $downloadCanvas[tipped;/src/data/tip.png]

            $fillText[tipped;$userNickname[$guildID;$get[user];false];$get[color2];20px hypatiasanspro;299;161;128;center]
            $drawImage[tipped;$nonEscape[$userAvatar[$get[user];;false;png]];237;12;124;124]

            $fillText[tipped;$userNickname[$guildID;$authorID;false];$get[color1];20px hypatiasanspro;74;161;128;center]
            $drawImage[tipped;$nonEscape[$userAvatar[$authorID;;false;png]];12;12;124;124]

            $drawImage[tipped;$nonEscape[$getMVar[tippedImage]];0;0;373;176]

        $createCanvas[tipped;373;176]

        $setUserMVar[getTips;$sum[$getUserMVar[getTips;$get[user]];1];$get[user]]
        $setUserMVar[playerTipped;$sum[$getUserMVar[playerTipped;$interactionData[author.id]];1];$interactionData[author.id]]

        $let[user;$slashOption[user]]

        $let[color2;$randomText[#2757b3;#44a57b;#880788;#9e9f0e;#b45004]]
        $let[color1;$randomText[#b3638a;#788838;#458f9f;#02781f;#805504]]
    `
}]