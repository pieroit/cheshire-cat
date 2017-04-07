import React                     from 'react'
import Panel                     from 'react-bootstrap/lib/Panel'
import Row                       from 'react-bootstrap/lib/Row'
import VisibilitySensor          from 'react-visibility-sensor'
import {connect as reduxConnect} from 'react-redux'

class BaseWidget extends React.Component {

    constructor(props){
        super(props)
        this.dashboard = document.dashboard // TODO: make this cleaner

        this.state = {
            'widgetControls': {},
            'isVisible'     : false,
            'isLoadingData' : false,
            'localData'     : []
        }
    }

    /*updateFromWidgetControls(formState){
        console.log('updating widget, receiving form state:', formState)
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
     * Merge widget and page controls
     */
    mergeLocalAndGlobalControls(){
        var widgetControls = this.state.widgetControls
        var pageControls   = this.props.pageControls

        // TODO: default merge

        return {}
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
     * render only controls (must return JSX)
     */
    renderControls(){
        // Do nothing
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
     * what happens when the widget is visible?
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
        console.warn('rendering', component.state)

        /*if(component.state.isLoadingData){
            var chartJSX = (
                <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            )
        } else {*/
            var chartJSX = (
                <div>
                    <img width="300px" src="img/cheshire-cat" />
                    <br/><br/><br/>
                    <p>'Would you tell me, please, which way I ought to go from here?'</p>
                    <p>'That depends a good deal on where you want to get to,' said the Cat.</p>
                    <p>'I don't much care where —' said Alice.</p>
                    <p>'Then it doesn't matter which way you go,' said the Cat.</p>

                    {component.renderCharts()}

                </div>
            )
        /*}*/

        if(component.state.isVisible){
            var widgetContentJSX = (
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
            var widgetContentJSX = (
                <div>
                    <VisibilitySensor active={true} onChange={component.toggleVisibility.bind(component)} delayedCall={false} />
                    <div>not visible</div>
                </div>
            )
        }

        return (
            <Panel collapsible defaultExpanded header="Panel">
                {widgetContentJSX}
            </Panel>
        )
    }

    reduxMapStateToProps(state){
        return state.controls
    }
}

var mapStateToProps = BaseWidget.reduxMapStateToProps
export default reduxConnect(mapStateToProps)(BaseWidget)
