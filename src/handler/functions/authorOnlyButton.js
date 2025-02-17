module.exports = {
    name: "$authorOnlyButton",
    type: "aoijs",
    params: ["index", "label", "style", "customID", "disabled", "emoji"],
    code: `
        $addButton[{index};{label};{style};{customId}_$authorID;{disabled};{emoji}]
    `
}