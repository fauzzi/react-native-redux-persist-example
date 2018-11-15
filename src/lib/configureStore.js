/**
 * Created by Akhmad Fauzi Hasibuan on 11/15/2018.
 * akhmadfauzihasibuan@gmail.com
 * https://www.linkedin.com/in/fauzzi
 * https://github.com/fauzzi
 * https://twitter.com/twitt_fauzi
 * Config of redux store, implemented redux persis, thunk and reactotron
 */

import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './../reducers'
import Reactotron from 'reactotron-react-native';

const persistConfig = {
    key: 'root',
    storage
};

if (__DEV__) {
    const xhr = global.originalXMLHttpRequest
        ? global.originalXMLHttpRequest
        : global.XMLHttpRequest;
    global.XMLHttpRequest = xhr;
}
const persistReducer = persistCombineReducers(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(thunk);

export default() => {
    const store = Reactotron.createStore(persistReducer, {}, composeEnhancers(createStoreWithMiddleware));
    return {store, persistor: persistStore(store)};
};