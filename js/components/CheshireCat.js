import React                                     from 'react'
import { connect as reduxConnect }               from 'react-redux'
import { HashRouter as Router, Route, Link }     from 'react-router-dom'
import { VictoryBar, VictoryPie }                from 'victory'
import { Grid, Row, Col }                        from 'react-bootstrap'
import BaseCard                                  from './cards/BaseCard'

// main component
var CheshireCat = React.createClass({

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
            <div>
                <Router>
                    <div>
                        {navigationJSX}
                        {this.props.children}
                    </div>
                </Router>
            </div>
        )
    }

})

// redux mapping
var mapStateToProps = function(state){
    return {}
}

module.exports = reduxConnect(mapStateToProps)(CheshireCat)
