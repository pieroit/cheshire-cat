
import React from 'react'


class LookingGlass extends React.Component {

    render() {
        let component = this

        // if there is no data, show spinner
        if(component.props.data.length == 0){
            return (
                <div>LOADING ...</div>
            )
        }

        // prepare data for viz
        let dataForViz = this.props.data
        if(this.props.dataPrep) {
            dataForViz = this.props.dataPrep( this.props.data )
        }

        let children = React.Children.map( this.props.children, child => {
            
            return (
                // Pass down props, the most important one being 'data'
                <child.type {...child.props} data={dataForViz} />
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