import React                     from 'react'
import {connect as reduxConnect} from 'react-redux'
import Panel                     from 'react-bootstrap/lib/Panel'
import Row                       from 'react-bootstrap/lib/Row'
import VisibilitySensor          from 'react-visibility-sensor'
import Form                      from "react-jsonschema-form"

class BaseViz extends React.Component {

    
}

var mapStateToProps = BaseViz.reduxMapStateToProps
export default reduxConnect(mapStateToProps)(BaseViz)
