module.exports = {
    name: 'trackStart',
    channel: '$channelId',
    type: 'trackStart',
    $if: 'old',
    code: `
        $if[$hasPlayer==true&&$voiceId[$clientId]!=||$hasPlayer==true&&$voiceMemberCount[$voiceId[$clientId]]!=1||$hasPlayer==true&&$channelExists[$channelId]==true]
            $setNowPlaying[$get[ID]]
			$setChannelMVar[playerID;$get[ID];$playerChannelID]
            $setVoiceStatus[$voiceID;mupp - $nonEscape[$songInfo[title]]]
            $let[ID;$sendMessage[{actionRow:{button::secondary:leave:false:$getEmoji[music.buttons.stop]}{button::secondary:previous:false:$getEmoji[music.buttons.previous]}{button::secondary:$playerStatus:false:$getEmoji[music.buttons.player.$playerStatus]}{button::secondary:skip:false:$getEmoji[music.buttons.skip]}{button::secondary:$loopStatus:false:$getEmoji[music.buttons.loop.$loopStatus]}}{attachment:player.png:./src/data/images/player.png};true]]
            
            $downloadCanvas[player;./src/data/images/player.png]
                $fillText[player;$get[platform];$lightenColor[$get[dominantColor];28];50px platforms;12;$get[ph];376]
                $fillText[player;$songInfo[title];$lightenColor[$get[dominantColor];28];22px productsansbold;12;158;376]
                $fillText[player;$songInfo[author];$get[dominantColor];13px productsansregular;12;176;376]
                $drawImage[player;$getImage[player.blackGradient];0;-81;400;400;10]
                $drawImage[player;$getImage[player.black];0;-81;400;400;10]
                $filter[player;remove;blur]

                $drawImage[player;$songInfo[thumbnail];0;$get[y];$get[w];$get[h];10]
                $filter[player;set;blur;1]
            $createCanvas[player;400;188]

            $let[h;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;225];spotify;400];soundcloud;400]]
            $let[w;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;400];spotify;400];soundcloud;400]]
            $let[y;$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;-20];spotify;-81];soundcloud;-81]]

            $let[dominantColor;$getDominantColor[$songInfo[thumbnail]]]
            $let[ph;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;36];soundcloud;32];youtube;34]]
            $let[platform;$replaceText[$replaceText[$replaceText[$songInfo[platform];spotify;4];soundcloud;5];youtube;1]]
        $else
            $leaveVC
        $endif
    `
};