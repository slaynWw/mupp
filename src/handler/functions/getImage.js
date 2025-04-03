module.exports = {
    name: '$getImage',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.client.returnCode(d, data);

        let [value] = data.inside.splits;
        value = value?.addBrackets();
        const config = require('../../config/index.js');
        const emojis = config.images;

        if (!emojis) {
            return {
                code: d.util.setCode({ ...data, result: 'Emojis configuration not found' })
            };
        }

        try {
            data.result = await eval(`emojis.${value}`);
        } catch (error) {
            data.result = `Error: ${error.message}`;
        }

        return {
            code: d.util.setCode(data)
        };
    }
}