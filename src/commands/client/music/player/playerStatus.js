module.exports = {
    name: "pauseresume",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
        $if[$playerStatus==paused]
            $resumeTrack
            $editMessage[$get[msgID];{newEmbed:{description:### $replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;$getObjectProperty[emojis;youtube]];spotify;$getObjectProperty[emojis;spotify]];soundcloud;$getObjectProperty[emojis;soundcloud]] [$songInfo[title]]($songInfo[url])}{field:Длительность:$songInfo[duration]:true}{field:Добавил:$songInfo[requester.mention]:true}{thumbnail:$songInfo[thumbnail]}{image:$getMVar[line]}{color:$replaceText[$replaceText[$replaceText[$songInfo[platform];youtube;ed3e3e];spotify;3eed46];soundcloud;ed843e]}}{actionRow:{selectMenu:loopMode:Repeat $loopStatus:1:1:false:{stringInput:off:noneMode::false:❌}{stringInput:queue:queueMode::false:🔁}{stringInput:single:songMode::false:🔂}}}{actionRow:{button::secondary:stop:false:⏹️}{button::secondary:previous:false:⏮️}{button::success:pauseresume:false:▶️}{button::secondary:skip:false:⏭️}{button::secondary:queueButton:false:#️⃣}}]
        $else
            $pauseTrack
            $interactionReply[⏸️;everyone;true;false]
        $endIF

        $let[msgID;$readFile[./src/data/message.txt]]
    `
}