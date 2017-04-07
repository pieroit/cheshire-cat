import React           from 'react'
import ReactDOM        from 'react-dom'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'
import reduxReducer    from './reducer'
import Dashboard       from './components/Dashboard'


var launchApp = function() {

    // initial state
    var initialState = {}
    var store = createStore(reduxReducer, initialState)

    ReactDOM.render(
        <Provider store={ store } >
            <Dashboard/>
        </Provider>,
        document.getElementById('dashboard')
    )

}

launchApp()
