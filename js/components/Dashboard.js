import React                                     from 'react'
import { connect as reduxConnect }               from 'react-redux'
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'
import { VictoryBar, VictoryPie }                from 'victory'
import { Grid, Row, Col }                        from 'react-bootstrap'
import BaseWidget                                from './widgets/BaseWidget'

// main component
var Dashboard = React.createClass({

    render: function(){

        return (
            <div>
                <Router basename={window.location.pathname}>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/bar">Bar</Link>
                        <Link to="/pie">Pie</Link>
                        <Route exact path="/" component={BaseWidget} />
                        <Route path="/bar" component={VictoryBar} />
                        <Route path="/pie" component={VictoryPie} />
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

module.exports = reduxConnect(mapStateToProps)(Dashboard)
