import React                      from 'react'
import ReactDOM                   from 'react-dom'
import { createStore }            from 'redux'
import { Provider }               from 'react-redux'
import reduxReducer               from './reducer'
import CheshireCat                from './components/CheshireCat'
import Door                       from './components/Door'
import BaseCard                   from './components/cards/BaseCard'
import { VictoryBar, VictoryPie, VictoryLine } from 'victory'

import { HashRouter as Router, Route, Link, hashHistory, browserHistory }  from 'react-router-dom'

var launchApp = function() {

    // initial state
    var initialState = {}
    var store = createStore(reduxReducer, initialState)

    ReactDOM.render(
        <Provider store={ store } >
            <CheshireCat>
                <Door exact path="/">
                    <BaseCard/>
                </Door>
                <Door path="/bar">
                    <h1>Yeah</h1>
                    <Door path="/bar/a">
                        <BaseCard
                            formSchema={{
                                title: "Alice is lost",
                                type: "object",
                                properties: {
                                    title: {type: "string", title: "Title", default: "A new task"},
                                    done: {type: "boolean", title: "Done?", default: false}
                                }
                            }}
                        >
                            <VictoryLine/>
                            <VictoryBar/>
                            <BaseCard
                                formSchema={{
                                    title: "Ouch",
                                    type: "object",
                                    properties: {
                                        date: {type: "string", format: "date", title: "Today?"}
                                    }
                                }}
                            >
                                Here is a clock
                            </BaseCard>
                        </BaseCard>
                    </Door>
                    <Door path="/bar/b">
                        <VictoryPie/>
                    </Door>
                </Door>
                <Door path="/pie">
                    <VictoryPie/>
                </Door>
            </CheshireCat>
        </Provider>,
        document.getElementById('dashboard')
    )

}

launchApp()
