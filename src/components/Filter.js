
import React from 'react'
import Select from 'react-select'


class Filter extends React.Component {

    render() {
        //console.log(this.props)
        return (
            <Select
                options={this.props.options}
                isMulti={this.props.isMulti}
            />
        )
    }

}

export default Filter 