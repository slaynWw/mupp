module.exports = {
    name: '$dateT',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.client.returnCode(d, data);

        let [ms] = data.inside.splits;
        ms = parseInt(ms);

        if (isNaN(ms)) {
            return {
                code: d.util.setCode({ ...data, result: 'Invalid milliseconds value' })
            };
        }

        const date = new Date(ms);
        const formattedDate = date.toISOString().split('T')[0]; // Форматируем только дату без времени

        return {
            code: d.util.setCode({ ...data, result: formattedDate })
        };
    }
}