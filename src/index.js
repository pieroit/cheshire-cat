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

        let allRegione = ["Lazio", "Sicilia", "Piemonte", "Molise"]
        let allCitta   = ["Roma", "Rieti", "Viterbo", "Palermo", "Catania", "Campobasso" ].map( d => { return {label:d, value:d} } )
        let allSesso   = ["M", "F"]

        let prepareRequest = function(filtersStatus, request){
            console.log('REQUEST PREP', filtersStatus, request)

            //request.method = 'POST'
            request.body = {'best': 'PORCO ZIO'}

            return request
        }

        let prepareResponse = function(response){
            //console.log('RESPONSE PREP', response)
            return response
        }

        let prepareDataForViz = function(rawData){
            //console.log('PREPARE DATA FOR VIZ', rawData)
            let dataForViz = rawData.results.map(function(d){
                d.numberOfCharacters = d.characters.length
                return d
            })
            return dataForViz
        }

        return (
            <CheshireCat>
                <Card>
                    
                    <Filters>
                        <Filter variable="Regione" options={allRegione} />
                        <Filter variable="Citta" options={allCitta} isMulti defaultValue={["Rieti", "Viterbo"]} />
                        <Filter variable="Sesso" options={allSesso} defaultValue="M" />
                        <Filter variable="Page" options={[1,2,3,4,5]} default={1} />
                    </Filters>

                    <DataSource
                        url={"https://rickandmortyapi.com/api/episode"}
                        method="GET"
                        requestPrep={prepareRequest}
                        responsePrep={prepareResponse}
                    />

                    <LookingGlass dataPrep={prepareDataForViz}>
                        <VictoryBar x="name" y="characters.length" />
                        <VictoryPie x="name" y="numberOfCharacters" />
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
