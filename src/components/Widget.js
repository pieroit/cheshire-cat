
import React from 'react'


class Widget extends React.Component {

    render() {

        // TODO: insert ajax
        let currentData = [
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

        let children = React.Children.map( this.props.children, child => {
            console.log(child.type.name)

            return (
                <child.type {...child.props} data={currentData} />
            )
        } )

        return (
            <div className="cheshire-widget">
                {children}
            </div>
        )
    }
}

export default Widget 