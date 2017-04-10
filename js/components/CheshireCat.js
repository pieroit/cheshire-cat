import React                                     from 'react'
import { connect as reduxConnect }               from 'react-redux'
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'
import { VictoryBar, VictoryPie }                from 'victory'
import { Grid, Row, Col }                        from 'react-bootstrap'
import BaseWidget                                from './widgets/BaseWidget'


/********

<Router basename={window.location.pathname}>
    <div>
        <Link to="/">Home</Link>
        <Link to="/bar">Bar</Link>
        <Link to="/pie">Pie</Link>
        <Route exact path="/"
            render={props => (
                    <BaseWidget/>
                )
            }
        />
        <Route path="/bar" component={VictoryBar} />
        <Route path="/pie" component={VictoryPie} />
    </div>
</Router>


***********/


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
                <Router basename={window.location.pathname}>
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
