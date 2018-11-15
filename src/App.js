/**
 * Created by Akhmad Fauzi Hasibuan on 11/15/2018.
 * akhmadfauzihasibuan@gmail.com
 * https://www.linkedin.com/in/fauzzi
 * https://github.com/fauzzi
 * https://twitter.com/twitt_fauzi
 * This file is main the app and implemented to redux store configuration
 */


import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import './lib/ReactotronConfig';
import configureStore from './lib/configureStore';
const {persistor, store} = configureStore();
import TodoContainer from './containers/Todo'

// Pass the store into the Provider
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <TodoContainer/>
                </PersistGate>
            </Provider>
        )
    }
}

export default App;