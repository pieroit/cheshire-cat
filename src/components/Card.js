
import React from 'react'


class Card extends React.Component {

    state = {
        'filters' : {},
        'data'    : []
    }

    onFiltersChange = (filtersStatus) => {
        console.warn('FILTER CHANGE')
        this.setState({
            'filters': filtersStatus
        })
    }

    // Executed when data arrives, to transofrm data before passing them to sub-components
    onData = (res) => {
        if(res.data) {
            console.log('DATA ARRIVED', res)

            this.setState({
                //'data': res.data
                'data': [
                    {
                        city: "Rome",
                        people: 3000000
                    },
                    {
                        city: "Milan",
                        people: 1000000
                    },
                    {
                        city: "Turin",
                        people: 500000
                    }
                ]
            })
        }

        // rect-requests
        return null
    }

    render() {

        let component = this

        let children = React.Children.map( this.props.children, child => {
            //console.log(child.type.name)

            // Give every sub-component additional pertaining props
            let augmentedProps = Object.assign({}, child.props)
            
            if(child.type.name === 'Filters'){
                augmentedProps.filtersChanged = component.onFiltersChange
                augmentedProps.filtersStatus  = component.state.filters
            }

            if(child.type.name === 'DataSource'){
                augmentedProps.dataArrived = component.onData
            }

            if(child.type.name === 'LookingGlass'){
                augmentedProps.data = component.state.data
            }

            return (
                <child.type {...augmentedProps} />
            )
        } )

        return (
            <div className="cheshire-widget">
                {children}
            </div>
        )
    }
}

export default Card 