import React                     from 'react'

class CatIntro extends React.Component {

    /**
     * Render CheshireCat intro, before getting lost in data
     */
    render(){

        return (
            <div>
                <img width="300px" src="img/cheshire-cat" />
                <br/><br/><br/>
                <p>'Would you tell me, please, which way I ought to go from here?' - said Alice.</p>
                <p>'That depends a good deal on where you want to get to' - said the Cat.</p>
                <p>'I don't much care where...' - said Alice.</p>
                <p>'Then it doesn't matter which way you go' - said the Cat.</p>
                <hr/>
                <p><b>You did not put a Viz inside this Door. Read the docs.</b></p>
            </div>
        )
    }
}

export default CatIntro
