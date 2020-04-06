import produce from 'immer';

export const get = (obj, keys, i = 0) => {
    const key = keys[i];
    if (i === keys.length - 1) {
        return obj && obj[key];
    }

    return obj && get(obj[key], keys, i + 1);
};

export const set = (obj, keys, value) => {
    if (keys.length === 0) {
        return value;
    }

    return produce(obj, (newObj) => {
        let currSubObj = newObj;
        for (let i = 0; i < keys.length - 1; i += 1) {
            const key = keys[i];
            if (!currSubObj[key]) {
                currSubObj[key] = {};
            }
            currSubObj = currSubObj[key];
        }

        const lastKey = keys[keys.length - 1];
        currSubObj[lastKey] = value;
    });
};
