
import React from 'react'
import { Fetch } from 'react-request'

// Note: this is a PureComponent
class DataSource extends React.PureComponent {

    onResponse = (res) => {

        // let user modify response data
        res = this.props.responsePrep(res)

        // Card receives data
        this.props.notifyCardThatDataArrived(res)
        
        // react-request wants the component to render something
        return null
    }

    render() {

        return (
            <Fetch {...this.props}>
                {this.onResponse}
            </Fetch>
        )
    }
}

export default DataSource 