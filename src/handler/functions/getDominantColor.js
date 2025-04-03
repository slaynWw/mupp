const { getAverageColor } = require('fast-average-color-node');

module.exports = {
    name: '$getDominantColor',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.client.returnCode(d, data);

        let [imageUrl] = data.inside.splits;
        imageUrl = imageUrl?.addBrackets();

        if (!imageUrl) {
            return {
                code: d.util.setCode({ ...data, result: 'Image URL is required' })
            };
        }

        try {
            const averageColor = await getAverageColor(imageUrl);
            const hexColor = averageColor.hex;

            data.result = hexColor;
        } catch (error) {
            data.result = `Error: ${error.message}`;
        }

        return {
            code: d.util.setCode(data)
        };
    }
};