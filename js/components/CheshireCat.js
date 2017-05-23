import React                                     from 'react'
import { createStore }                           from 'redux'
import { connect as reduxConnect, Provider }     from 'react-redux'
import reduxReducer                              from './../reducer'
import { HashRouter as Router, Route, Link }     from 'react-router-dom'
import { VictoryBar, VictoryPie }                from 'victory'
import { Grid, Row, Col }                        from 'react-bootstrap'
import BaseCard                                  from './cards/BaseCard'

// main component
var CheshireCat = React.createClass({

    componentWillMount: function(){

        // initial state
        var initialState = {}
        this.store = createStore(reduxReducer, initialState)
    },

    render: function(){

        // TODO: how to manage navigation tabs?
        var navigationJSX = (
            <div>
                <Link to="/">Home</Link>
                <Link to="/bar">Bar</Link>
                <Link to="/pie">Pie</Link>
            </div>
        )

        return (
            <Provider store={ this.store } >
                <Router>
                    <div>
                        {navigationJSX}
                        {this.props.children}
                    </div>
                </Router>
            </Provider>
        )
    }

})

module.exports = CheshireCat
