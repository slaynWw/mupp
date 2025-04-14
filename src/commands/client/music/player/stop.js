module.exports = {
    name: 'leave',
    type: "interaction",
    prototype: "button",
    code: `
        $disconnect
        $deleteChannelVar[playerID;$channelID]
        $deleteMessage[$getChannelMVar[playerID;$channelId];$channelID]
        $stopTrack
        $onlyIf[$voiceID[$authorId]==$voiceID[$clientID];Упс... Что-то пошло не так...\n-# Что-бы использовать меню, подключитесь к голосовому каналу в котором находится бот.{options:{interaction}}{extraOptions:{ephemeral}}]
    `
};

//$queue[1;20;{position}. [{title}]({url})]