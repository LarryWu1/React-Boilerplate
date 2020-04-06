import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';

import { defaultReducer } from './reducers';

const allReducers = combineReducers({
    default: defaultReducer,
});

export default createStore(
    allReducers,
    {},
    composeWithDevTools(applyMiddleware(thunk)),
);
