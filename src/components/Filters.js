
import React from 'react'
import Select from 'react-select'


class Filters extends React.Component {

    render() {

        let children = React.Children.map( this.props.children, child => {
            if(child.type.name !== 'Filter') {
                throw new Error('Filters component can only have Filter children.')
            }

            return (
                <child.type {...child.props} />
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