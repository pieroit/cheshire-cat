
import React from 'react'
import { Fetch } from 'react-request'

// Note: this is a PureComponent
class DataSource extends React.PureComponent {

    render() {

        let component = this
        
        return (
            <Fetch {...this.props}>
                {(res) => {
                    component.props.dataArrived(res)
                    return null
                }}
            </Fetch>
        )
    }
}

export default DataSource 