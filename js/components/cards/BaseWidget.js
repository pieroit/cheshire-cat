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
            'CardControls': {},
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
     * fetchData
     */
    fetchData(queryOptions){
        console.log('fetch data')
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
        console.log('data arrived')
        this.setState({
            'isLoadingData': false,
            'localData'    : response
        })
    }

    /**
     * local controls changed
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
     * render only controls (must return JSX)
     */
    renderControls(){

        var component = this

        // Do nothing
        var schema = {
            title: "Example form",
            type: "object",
            properties: {
                title: {type: "string", title: "Title", default: "A new task"},
                done: {type: "boolean", title: "Done?", default: false}
            }
        }

        var formData = {} // TODO: this should come from dashboard state

        return (
            <Form schema={schema}
                formData={formData}
                onChange={component.onLocalControlsChange}
            >
                <div></div>

            </Form>
        )
    }

    /**
     * render only charts (must return JSX)
     */
    renderCharts(){
        // Do nothing
    }

    /**
     * render only actions (must return JSX)
     */
    renderActions(){
        // Do nothing
    }

    /**
     * what happens when the Card is visible?
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
        //console.warn('rendering', component.state)


        var children = React.Children.map(component.props.children, function(child){
            console.log(child.type.prototype)
            return 2
        })
        //console.log(children)


        /*if(component.state.isLoadingData){
            var chartJSX = (
                <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            )
        } else {*/
            var chartJSX = (
                <div>
                    <img width="300px" src="img/cheshire-cat" />
                    <br/><br/><br/>
                    <p>'Would you tell me, please, which way I ought to go from here?' - said Alice.</p>
                    <p>'That depends a good deal on where you want to get to' - said the Cat.</p>
                    <p>'I don't much care where...' - said Alice.</p>
                    <p>'Then it doesn't matter which way you go' - said the Cat.</p>

                    {component.renderCharts()}

                </div>
            )
        /*}*/

        if(component.state.isVisible){
            var CardContentJSX = (
                <div>
                    <Row>
                        {component.renderControls()}
                    </Row>
                    <Row>
                        {chartJSX}
                    </Row>
                    <Row>
                        {component.renderActions()}
                    </Row>
                </div>
            )
        } else {
            var CardContentJSX = (
                <div>
                    <VisibilitySensor active={true} onChange={component.toggleVisibility.bind(component)} delayedCall={false} />
                    <div>not visible</div>
                </div>
            )
        }

        return (
            <Panel collapsible defaultExpanded header="Panel">
                {CardContentJSX}
            </Panel>
        )
    }

    reduxMapStateToProps(state){
        return state.controls
    }
}

var mapStateToProps = BaseCard.reduxMapStateToProps
export default reduxConnect(mapStateToProps)(BaseCard)
