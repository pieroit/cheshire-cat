
import React from 'react'
import _ from 'lodash'


class Filters extends React.Component {

    /*state = {
        filters: {}
    }*/

    // let's keep it out of React for now
    filtersState = {}

    filterChanged = (variableName, value) => {
        //console.log('FILTERS CHANGED', variableName, value)

        this.filtersState[variableName] = value

        this.props.notifyCardThatfiltersChanged(this.filtersState)
    }

    render() {

        let children = React.Children.map( this.props.children, child => {
            if(child.type.name !== 'Filter') {
                throw new Error('Filters component can only have Filter children.')
            }

            return (
                <child.type {...child.props} notifyFilterChanged={this.filterChanged} />
            )
        })

        return (
            <div className="cheshire-filters">
                {children}
            </div>
        )
    }

}

export default Filters