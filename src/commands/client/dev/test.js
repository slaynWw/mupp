module.exports = {
    name: "test", 
    aliases: ["t"],
    code: `
        $getObjectProperty[emojis;spotify]

        $createObject[emojis;$getMVar[emojis]]
    `
}