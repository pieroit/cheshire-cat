var deepcopy = require('deepcopy')
var util     = require('./utility')

var reducer = function(state, action){

    console.log(state,action)

    // default
    var newState = state

    if(action.type == "..."){
        newState = deepcopy(state)
        // edit state here
    }

    return newState
}

module.exports = reducer
