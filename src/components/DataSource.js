
import React from 'react'
import { Fetch } from 'react-request'
import _ from 'lodash'

// Note: this is a PureComponent
class DataSource extends React.PureComponent {


    fetchCallback = (res) => {

        //console.error(res)

        if (res.fetching) {
            return null //TODO: manage loading
        }

        if (res.failed) {
            console.error('FAILED REQUEST', res)
            return null //TODO: manage fails 
        }

        if (res.data) {

            let responseData = res.data

            // let user modify response data
            if(this.props.responsePrep) {
                responseData = this.props.responsePrep(responseData)
            }

            // Card receives data
            this.props.notifyCardThatDataArrived(responseData)
            
            // react-request wants the component to render something
            return null
        }

        return null
    }

    render() {

        let defaultRequestOptions = _.cloneDeep(this.props) // TODO: is there a smarter way?
        let customRequestOptions  = this.props.requestPrep(this.props.filtersStatus, defaultRequestOptions)
        console.log(customRequestOptions)

        return (
            <Fetch {...customRequestOptions} >
                {this.fetchCallback}
            </Fetch>
        )
    }
}

export default DataSource 