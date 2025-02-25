module.exports = [{
    name: "say",
    type: "interaction",
    prototype: "slash",
    code: `
        $interactionModal[Сообщение;sayMessage;
            {actionRow:
                {textInput:Сообщение:2:messageInput:true::1:500}
            }
        ]
    `
}, {
    name: "sayMessage",
    type: "interaction",
    prototype: "modal",
    code: `
        $interactionReply[
            $textInputValue[messageInput]\n
            ;everyone;false;false
        ]

        $setUserMVar[commandsUsed;$sum[$getUserMVar[commandsUsed;$interactionData[author.id]];1];$interactionData[author.id]]
    `
}]