import React                                     from 'react'
import {connect as reduxConnect}                 from 'react-redux'
import Panel                                     from 'react-bootstrap/lib/Panel'
import { HashRouter as Router, Route, Link }     from 'react-router-dom'
import Row                                       from 'react-bootstrap/lib/Row'
import VisibilitySensor                          from 'react-visibility-sensor'
import Form                                      from 'react-jsonschema-form'

/**
 * A wrapper for the default react-router Route.
 */
class Door extends React.Component {

    render(){
        //console.log(this.props.match)
        var component = this
        var path      = this.props.path

        var linksJSX = []
        React.Children.forEach(component.props.children, child => {
            if(child.props.path){
                var childrenPath = child.props.path

                // add navigation links (for the react-router)
                // TODO: these must become tabs
                // TODO: search links to routes in component tree :@
                linksJSX.push((
                    <Link to={childrenPath}>{childrenPath}</Link>
                ))
            }
        })

        return (
            <div>
                <Route {...component.props}
                    render={ function(props){
                        console.log(component.props.children)
                        return (
                            <div>
                                {linksJSX}
                                {component.props.children}
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}

export default Door
