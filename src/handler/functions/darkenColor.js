module.exports = {
    name: '$darkenColor',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.client.returnCode(d, data);

        let [hexColor, percentage] = data.inside.splits;
        hexColor = hexColor?.addBrackets();
        percentage = parseFloat(percentage);

        if (!/^#([0-9A-F]{3}){1,2}$/i.test(hexColor)) {
            return {
                code: d.util.setCode({ ...data, result: 'Invalid hex color format' })
            };
        }

        if (isNaN(percentage) || percentage < 0 || percentage > 100) {
            return {
                code: d.util.setCode({ ...data, result: 'Percentage must be a number between 0 and 100' })
            };
        }

        const darkenColor = (color, percent) => {
            const num = parseInt(color.slice(1), 16);
            const amt = Math.round(2.55 * percent);
            const R = (num >> 16) - amt;
            const G = ((num >> 8) & 0x00FF) - amt;
            const B = (num & 0x0000FF) - amt;
            return `#${
                (0x1000000 + (R > 0 ? (R > 255 ? 255 : R) : 0) * 0x10000 + 
                (G > 0 ? (G > 255 ? 255 : G) : 0) * 0x100 + 
                (B > 0 ? (B > 255 ? 255 : B) : 0))
                .toString(16)
                .slice(1)
            }`;
        };

        try {
            data.result = darkenColor(hexColor, percentage);
        } catch (error) {
            data.result = `Error: ${error.message}`;
        }

        return {
            code: d.util.setCode(data)
        };
    }
}