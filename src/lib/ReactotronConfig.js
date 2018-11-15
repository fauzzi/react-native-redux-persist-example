
import Reactotron from 'reactotron-react-native'
import {reactotronRedux as reduxPlugin} from 'reactotron-redux'

console.disableYellowBox = true

/**
 * First, set some configuration settings on how to connect to the app
 * default host is 10.0.1.1
 * Change host as your ip address if want to running in real device
 */
Reactotron.configure({
    name: 'CodeLab', 
    host: '192.168.10.70'
    // port: 9091
})

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin if
// you'd like.
Reactotron.useReactNative({
    asyncStorage: {
        ignore: ['secret']
    }
})

// add some more plugins for redux & redux-saga
Reactotron.use(reduxPlugin())

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
    Reactotron.connect()
    Reactotron.clear()
}

console.tron = Reactotron