
import React from 'react'


class CheshireCat extends React.Component {

    render() {

        let children = React.Children.map( this.props.children, child => {
            //console.log(child.type.name)
            return (
                <child.type {...child.props} />
            )
        } )

        return (
            <div className="cheshire-cat">
                {children}
            </div>
        )
    }

}

export default CheshireCat 