
import React from 'react'


class LookingGlass extends React.Component {

    render() {
        let component = this

        let children = React.Children.map( this.props.children, child => {
            
            //console.log(child.props, component.props)
            
            return (
                // Pass down props, the most important one being 'data'
                <child.type {...child.props} data={component.props.data} />
            )
        })

        return (
            <div className="cheshire-looking-glass">
                {children}
            </div>
        )
    }

}

export default LookingGlass 