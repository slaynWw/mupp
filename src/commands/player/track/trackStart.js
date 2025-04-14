module.exports = [{
    name: "trackStart",
    channel: '$channelId',
    type: 'trackStart',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$channelExists[$channelId]==true]
            $log[ ]
            $log[$songInfo[author] - $songInfo[title]]
            $log[Message ID - $get[msgID]]
            $log[Channel ID - $channelName[$channelID]]
            $log[Voice ID - $channelName[$voiceID]]
            $log[ ]

            $setNowPlaying[$get[msgID]]
            $setChannelMVar[playerID;$get[msgID];$channelID]
            $let[msgID;$sendMessage[{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg};true]]
            $setVoiceStatus[$voiceID;$nonEscape[$songInfo[author]] - $nonEscape[$songInfo[title]]]
            $downloadCanvas[player;./src/data/player.jpg]
                $fillText[player;$get[platform];$lightenColor[$getDominantColor[$songInfo[thumbnail]];28];50px platforms;12;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;36];soundcloud;32];youtube;34];376]
                $fillText[player;$nonEscape[$songInfo[title]];$lightenColor[$getDominantColor[$songInfo[thumbnail]];28];22px productsansbold;12;158;376]
                $fillText[player;$nonEscape[$songInfo[author]];$getDominantColor[$songInfo[thumbnail]];13px productsansregular;12;176;376]
                $drawImage[player;$getImage[player.background];0;-81;400;400;10]
                $filter[player;remove;blur]
                $drawImage[player;$songInfo[thumbnail];0;$get[y];$get[w];$get[h];10]
                $filter[player;set;blur;1]

                $let[platform;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;4];soundcloud;5];youtube;1]]
                $let[h;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;225];spotify;400];soundcloud;400]]
                $let[w;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;400];spotify;400];soundcloud;400]]
                $let[y;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;-20];spotify;-81];soundcloud;-81]]
            $createCanvas[player;400;188]
        $else
            $destroyPlayer
        $endif 
    `
}];

/*
$let[msgID;$sendMessage[{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.jpg:./src/data/player.jpg};true]]
            
            $downloadCanvas[player;./src/data/player.jpg]
                $fillText[player;$get[platform];$lightenColor[$getDominantColor[$songInfo[thumbnail]];28];50px platforms;12;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;36];soundcloud;32];youtube;34];376]
                $fillText[player;$nonEscape[$songInfo[title]];$lightenColor[$getDominantColor[$songInfo[thumbnail]];28];22px productsansbold;12;158;376]
                $fillText[player;$nonEscape[$songInfo[author]];$getDominantColor[$songInfo[thumbnail]];13px productsansregular;12;176;376]
                $drawImage[player;$getImage[player.background];0;-81;400;400;10]
                $filter[player;remove;blur]
                $drawImage[player;$songInfo[thumbnail];0;$get[y];$get[w];$get[h];10]
                $filter[player;set;blur;1]

                $let[platform;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;4];soundcloud;5];youtube;1]]
                $let[h;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;225];spotify;400];soundcloud;400]]
                $let[w;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;400];spotify;400];soundcloud;400]]
                $let[y;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;-20];spotify;-81];soundcloud;-81]]
            $createCanvas[player;400;188]
*/