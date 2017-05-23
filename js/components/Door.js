import React                                     from 'react'
import {connect as reduxConnect}                 from 'react-redux'
import Panel                                     from 'react-bootstrap/lib/Panel'
import { HashRouter as Router, Route, Link }     from 'react-router-dom'
import Row                                       from 'react-bootstrap/lib/Row'
import VisibilitySensor                          from 'react-visibility-sensor'
import Form                                      from 'react-jsonschema-form'
import CatIntro                                  from './viz/CatIntro'

/**
 * A wrapper for the default react-router Route.
 */
class Door extends React.Component {

    constructor(props){
        super(props)
        this.dashboard = document.dashboard // TODO: make this cleaner

        this.state = {
            'isVisible'     : false
        }
    }

    /**
     * What happens when the Viz is visible?
     */
    toggleVisibility(visibility){
        this.setState({
            'isVisible'    : visibility
        })
    }

    /**
     * Fired when Door form changes
     */
    onLocalControlsChange(formEvent) {
        console.log(formEvent.formData)

        // TODO: pass new filters downstream
    }

    /**
     * Render Door controls.
     * Works if this.props.form is a plain object to be passed as props to a react-json-schema form:
     * https://mozilla-services.github.io/react-jsonschema-form/
     * https://github.com/mozilla-services/react-jsonschema-form
     * When the form change, this.onLocalControlsChange() will be fired.
     */
    renderControls(){

        var component = this

        if(component.props.form){
            return (
                <Form schema={component.props.form.schema}
                    formData={component.props.form.formData}
                    onChange={component.onLocalControlsChange}
                >
                    <div></div>
                </Form>
            )
        }
    }

    /**
     * Renders a visibility sensor, so the component will activate only when visible on page
     */
    renderVisibilitySensor() {

        var component = this

        return (
           <div>
               <VisibilitySensor active={true} onChange={component.toggleVisibility.bind(component)} delayedCall={false} />
               <div>Down the rabbit hole...</div>
           </div>
       )
    }

    /**
     * Door rendering. It will be rendered only if visible on screen
     */
    render(){

        var component = this
        var path      = this.props.path

        // Only render contents if the Viz is visible in page.
        if(!component.state.isVisible){

            // Visibility sensor is here!
            var vizContentJSX = component.renderVisibilitySensor()

        } else {

            if(component.props.children){
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

                var vizContentJSX = (
                    <div>
                        {linksJSX}
                        {component.renderControls()}
                        {component.props.children}
                    </div>
                )

            } else {
                var vizContentJSX = (
                    <CatIntro/>
                )
            }
        }

        // Viz contents are shown in a collapsible Panel
        var header = this.props.header? this.props.header : 'Viz'
        return (
            <Route {...component.props}
                render={ function(props){
                    console.log(component.props.children)
                    return (
                        <Panel collapsible defaultExpanded header={header}>
                            {vizContentJSX}
                        </Panel>
                    )
                }}
            />
        )
    }

}

export default Door
