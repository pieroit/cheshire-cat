import React                      from 'react'
import ReactDOM                   from 'react-dom'
import CheshireCat                from './components/CheshireCat'
import Door                       from './components/Door'
import BaseViz                    from './components/viz/BaseViz'
import { VictoryChart, VictoryBar, VictoryPie, VictoryLine, VictoryCandlestick } from 'victory'

import { HashRouter as Router, Route, Link, hashHistory, browserHistory }  from 'react-router-dom'

var launchApp = function() {

    ReactDOM.render(
        <CheshireCat>
            <Door exact path="/">
                <BaseViz header="Welcome by the Cheshire Cat" />
            </Door>
            <Door path="/bar">
                <h1>Yeah</h1>
                <Door path="/bar/a">
                    <BaseViz
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
                        <BaseViz
                            formSchema={{
                                title: "Ouch",
                                type: "object",
                                properties: {
                                    date: {type: "string", format: "date", title: "Today?"}
                                }
                            }}
                        >
                            Here is a clock
                        </BaseViz>
                    </BaseViz>
                </Door>
                <Door path="/bar/b">
                    <VictoryPie/>
                </Door>
            </Door>
            <Door path="/pie">
            <VictoryPie
                data={[
                    {val:2,lab:"down"},
                    {val:1,lab:"dunno"},
                    {val:5,lab:"happy"}
                ]}
                x="lab"
                y={ (d)=> d.val }
                colorScale="qualitative"
                startAngle={-90}
                endAngle={90}
            />
            </Door>
        </CheshireCat>,
        document.getElementById('dashboard')
    )

}

launchApp()
