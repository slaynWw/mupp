module.exports = {
    name: "test", 
    aliases: ["t"],
    code: `
        $getObjectProperty[emojis;discord]

        $createObject[emojis;$getMVar[emojis]]
    `
}