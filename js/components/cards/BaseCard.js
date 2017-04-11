import React                     from 'react'
import {connect as reduxConnect} from 'react-redux'
import Panel                     from 'react-bootstrap/lib/Panel'
import Row                       from 'react-bootstrap/lib/Row'
import VisibilitySensor          from 'react-visibility-sensor'
import Form                      from "react-jsonschema-form"

class BaseCard extends React.Component {

    constructor(props){
        super(props)
        this.dashboard = document.dashboard // TODO: make this cleaner

        this.state = {
            'isVisible'     : false,
            'isLoadingData' : false,
            'localData'     : []
        }
    }

    /*updateFromCardControls(formState){
        console.log('updating Card, receiving form state:', formState)
    }*/

    /**
     * Called when state or props change. React core method!
     */
    componentDidUpdate(){

        var component = this

        // merge local and global controls
        var controlsQuery = component.mergeLocalAndGlobalControls()

        // ask for data and then render
        // TODO IMPORTANT: this triggers infinite recursion
        //component.fetchData(controlsQuery)
    }

    /**
     * Fetch data from the cache
     */
    fetchData(queryOptions){

        var component = this
        this.setState({
            'isLoadingData': true
        })

        setTimeout(function(){
            component.onData([1,2,3,4])
        },1000)
        /*component.dashboard.API.get(
            component.dashboard.defaultEndpoint,
            controlsQuery,
            component.onData.bind(component)
        )*/

    }

    /**
     * Called when data arrives from the server
     */
    onData(response){
        this.setState({
            'isLoadingData': false,
            'localData'    : response
        })
    }

    /**
     * Local controls changed
     */
    onLocalControlsChange(formData){
        console.log(formData)
    }

    /**
     * Merge parent and local controls
     */
    mergeLocalAndGlobalControls(){
        var CardControls = this.state.CardControls
        var pageControls   = this.props.pageControls

        // TODO: default merge

        return {}
    }

    /**
     * Render Card controls.
     * Only works if this.props.formSchema contains a react-json-schema form.
     * Must return form in JSX. When the form change, this.onLocalControlsChange() will be fired.
     */
    renderControls(){

        var component = this
        var formData = {} // TODO: this should come from dashboard state

        if(component.props.formSchema){
            return (
                <Form schema={component.props.formSchema}
                    formData={formData}
                    onChange={component.onLocalControlsChange}
                >
                    <div></div>

                </Form>
            )
        }
    }

    /**
     * Render only charts (must return JSX)
     */
    renderCharts(){
        if(this.props.children){
            // TODO: pass data down here
            return this.props.children
        } else {
            // Default
            return (
                <div>
                    <img width="300px" src="img/cheshire-cat" />
                    <br/><br/><br/>
                    <p>'Would you tell me, please, which way I ought to go from here?' - said Alice.</p>
                    <p>'That depends a good deal on where you want to get to' - said the Cat.</p>
                    <p>'I don't much care where...' - said Alice.</p>
                    <p>'Then it doesn't matter which way you go' - said the Cat.</p>
                    <hr/>
                    <p><b>You did not put components inside this Card. Read the docs.</b></p>
                </div>
            )
        }
    }

    /**
     * Render only actions (must return JSX)
     */
    renderActions(){
        // Do nothing
    }

    /**
     * What happens when the Card is visible?
     */
    toggleVisibility(visibility){

        // get data and show them
        this.setState({
            'isVisible'    : visibility,
            'isLoadingData': true
        })
    }

    render(){

        var component = this

        // Only render contents if the Card is visible in page.
        if(component.state.isVisible){
            var cardContentJSX = (
                <div>
                    <Row>
                        {component.renderControls()}
                    </Row>
                    <Row>
                        {component.renderCharts()}
                    </Row>
                    <Row>
                        {component.renderActions()}
                    </Row>
                </div>
            )
        } else {
            // Visibility sensor is here!
            var cardContentJSX = (
                <div>
                    <VisibilitySensor active={true} onChange={component.toggleVisibility.bind(component)} delayedCall={false} />
                    <div>not visible</div>
                </div>
            )
        }

        // Card contents are shown in a collapsible Panel
        var header = this.props.header? this.props.header : 'Card'
        return (
            <Panel collapsible defaultExpanded header={header}>
                {cardContentJSX}
            </Panel>
        )
    }

    reduxMapStateToProps(state){
        return state.controls
    }
}

var mapStateToProps = BaseCard.reduxMapStateToProps
export default reduxConnect(mapStateToProps)(BaseCard)
