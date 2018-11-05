import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { VictoryBar, VictoryPie } from 'victory'

import CheshireCat from './components/CheshireCat';
import Card from './components/Card'
import Filters from './components/Filters'
import Filter from './components/Filter'
import LookingGlass from './components/LookingGlass'
import DataSource from './components/DataSource'

import * as serviceWorker from './serviceWorker';


class App extends React.Component {

    render() {

        let allRegione = ["Lazio", "Sicilia", "Piemonte", "Molise"].map( d => { return {label:d, value:d} } )
        let allCitta   = ["Roma", "Rieti", "Viterbo", "Palermo", "Catania", "Campobasso" ].map( d => { return {label:d, value:d} } )
        let allSesso   = ["M", "F"].map( d => { return {label:d, value:d} } )

        let prepareDataForViz = function(d){
            console.log(d)
            return d
        }

        return (
            <CheshireCat>
                <Card>
                    
                    <Filters>
                        <Filter variable="Regione" options={allRegione} />
                        <Filter variable="Citta" options={allCitta} parent="Regione" default={"Turin"} />
                        <Filter variable="Sesso"  options={allSesso} isMulti default={"F"} />
                    </Filters>

                    <DataSource
                        url={"https://api.myjson.com/bins/1d31ja"}
                        method="GET"
                    />

                    <LookingGlass dataPrep={prepareDataForViz}>
                        <VictoryBar x="city" y="people" />
                        <VictoryPie x="city" y="people" />
                        <VictoryPie x="c" y="a" />
                    </LookingGlass>

                </Card>
            </CheshireCat>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
