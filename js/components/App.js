var React        = require('react')
var reduxConnect = require('react-redux').connect
var Grid         = require('react-bootstrap/lib/Grid')
var Row          = require('react-bootstrap/lib/Row')
var Col          = require('react-bootstrap/lib/Col')

// main component
var App = React.createClass({

    render: function(){

        return (
            <div>
                Ready to get into the zone
            </div>
        )
    }

})

// redux mapping
var mapStateToProps = function(state){
    return {}
}

module.exports = reduxConnect(mapStateToProps)(App)
