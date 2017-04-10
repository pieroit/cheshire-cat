import React                                     from 'react'
import {connect as reduxConnect}                 from 'react-redux'
import Panel                                     from 'react-bootstrap/lib/Panel'
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'
import Row                                       from 'react-bootstrap/lib/Row'
import VisibilitySensor                          from 'react-visibility-sensor'
import Form                                      from 'react-jsonschema-form'

/**
 * A wrapper for the default react-router Route.
 */
class Door extends React.Component {

    render(){
        var component = this

        return (
            <Route {...component.props}
                render={ props =>(
                    component.props.children
                )}
            />
        )
    }
}

export default Door
