var React        = require('react')
var ReactDOM     = require('react-dom')
var Redux        = require('redux')
var ReactRedux   = require('react-redux')
var reduxReducer = require('./reducer')
var App          = require('./components/App')

var launchApp = function() {

    // initial state
    var appState = {}

    var store = Redux.createStore(reduxReducer, appState)

    ReactDOM.render(
        <ReactRedux.Provider store={ store } >
            <App />
        </ReactRedux.Provider>,
        document.getElementById('app')
    )
}

launchApp()
