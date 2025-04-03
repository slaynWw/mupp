
module.exports = {
    name: '$date',
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
        const formattedDate = date.toUTCString();

        return {
            code: d.util.setCode({ ...data, result: formattedDate })
        };
    }
}