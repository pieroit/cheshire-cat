
import React from 'react'
import Select from 'react-select'

class Filter extends React.Component {

    // notify filters default values after first render
    componentDidMount() {
        if(this.props.defaultValue) {
            let defaultValue = this.labelizeDefaultValue(this.props.defaultValue)
            //console.log(defaultValue)
            this.props.notifyFilterChanged(this.props.variable, defaultValue)
        }
    }

    onChange = (value) => {
        this.props.notifyFilterChanged(this.props.variable, value)
    }

    labelizeDefaultValue = (defaultValue) => { 
        if(defaultValue) {
            if( ! Array.isArray(defaultValue) ) {
                defaultValue = [ defaultValue ]
            }
            if( ! defaultValue[0].label ) {
                defaultValue = this.labelizeForReactSelect(defaultValue)
            }
        }

        return defaultValue
    }

    labelizeOptions = (options) => {
        if(options && ( ! options[0].label) ) {
            return this.labelizeForReactSelect(options)
        } else {
            return options
        }
    }

    labelizeForReactSelect = (options) => {
        return options.map(function(d){
            return {
                label: d,
                value: d
            }
        })
    }

    render() {
        //console.log(this.props)

        // TODO: insert logic to adapt current filter to other filters

        // every option should be an object with label and value
        let options = this.labelizeOptions( this.props.options )

        // default value should be an object with label and value
        let defaultValue = this.labelizeDefaultValue( this.props.defaultValue )

        return (
            <Select
                placeholder={this.props.variable + '...'}
                options={options}
                defaultValue={defaultValue}
                isMulti={this.props.isMulti}
                onChange={this.onChange}
            />
        )
    }

}

export default Filter