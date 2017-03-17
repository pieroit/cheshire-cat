var React        = require('react')
var reduxConnect = require('react-redux').connect
var Grid         = require('react-bootstrap/lib/Grid')
var Row          = require('react-bootstrap/lib/Row')
var Col          = require('react-bootstrap/lib/Col')
var BaseWidget   = require('./widgets/BaseWidget').default

// main component
var App = React.createClass({

    render: function(){

        return (
            <div>
                <BaseWidget/>
            </div>
        )
    }

})

// redux mapping
var mapStateToProps = function(state){
    return {}
}

module.exports = reduxConnect(mapStateToProps)(App)
