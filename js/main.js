import React                      from 'react'
import ReactDOM                   from 'react-dom'
import { createStore }            from 'redux'
import { Provider }               from 'react-redux'
import reduxReducer               from './reducer'
import CheshireCat                from './components/CheshireCat'
import Door                       from './components/Door'
import BaseWidget                 from './components/widgets/BaseWidget'
import { VictoryBar, VictoryPie } from 'victory'


var launchApp = function() {

    // initial state
    var initialState = {}
    var store = createStore(reduxReducer, initialState)

    ReactDOM.render(
        <Provider store={ store } >
            <CheshireCat>
                <Door exact path="/">
                    <BaseWidget/>
                </Door>
                <Door path="/pie">
                    <VictoryBar/>
                </Door>
                <Door path="/bar">
                    <VictoryPie/>
                </Door>
            </CheshireCat>
        </Provider>,
        document.getElementById('dashboard')
    )

}

launchApp()
