import { set } from '../helpers';

export const defaultState = {};

export const defaultReducer = (state = defaultState, { type, keys, value }) => {
    if (type.startsWith('DEFAULT')) {
        return set(state, keys, value);
    }
    return state;
};
