
import React from 'react'
import utils from './../utils'


class Card extends React.Component {

    state = {
        'filters' : {},
        'data'    : []
    }

    onFiltersChange = (filtersStatus) => {
        console.warn('CARD FILTER CHANGE', filtersStatus)
        this.setState({
            'filters': filtersStatus
        })
    }

    // Executed when data arrives, to transofrm data before passing them to sub-components
    onData = (res) => {
        console.warn('CARD HAS NEW DATA', res)
        if(res) {
            this.setState({
                'data': res
            })
        }
    }

    render() {

        let component = this

        let children = React.Children.map( this.props.children, child => {
            //console.log(child.type.name)

            // Give every sub-component additional pertaining props
            let augmentedProps = Object.assign({}, child.props)
            
            if(child.type.name === 'Filters'){
                augmentedProps.notifyCardThatfiltersChanged = component.onFiltersChange
                augmentedProps.filtersStatus  = component.state.filters
            }

            if(child.type.name === 'DataSource'){
                augmentedProps.notifyCardThatDataArrived = component.onData
            }

            if(child.type.name === 'LookingGlass'){
                augmentedProps.data = component.state.data
            }

            return (
                <child.type {...augmentedProps} />
            )
        } )

        return (
            <div className="cheshire-card">
                {utils.jsonPrettyPrint(this.state.filters)}
                {children}
            </div>
        )
    }
}

export default Card 