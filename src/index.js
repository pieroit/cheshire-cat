import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { VictoryBar, VictoryPie } from 'victory'

import CheshireCat from './components/CheshireCat';
import Widget from './components/Widget'
import Filter from './components/Filter'

import * as serviceWorker from './serviceWorker';


class App extends React.Component {

    render() {

        let allRegione = ["Lazio", "Sicilia", "Piemonte", "Molise"].map( d => { return {label:d, value:d} } )
        let allCitta   = ["Roma", "Rieti", "Viterbo", "Palermo", "Catania", "Campobasso" ].map( d => { return {label:d, value:d} } )
        let allSesso   = ["M", "F"].map( d => { return {label:d, value:d} } )

        return (
            <CheshireCat>
                <Widget>
                    <Filter variable="Regione" options={allRegione} isMulti />
                    <Filter variable="Sesso" options={allSesso} />
                    {/*<Filters>
                        <Filter variable="Regione" values={allRegione} />
                        <Filter variable="Citta" values={allCitta} parent="Regione" default={"Turin"} />
                        <Filter variable="Sesso"  values={allSesso} chooseOnlyOne default={"F"} />
                    </Filters>

                    <DataSources>
                        <DataSource url="https://asdsdd.it" method="GET" />
                        <DataSource url="https://robotrobot.com" method="POST" />
                    </DataSources>

                    <Viz>
                        <VictoryBar x="Città" y="Sesso" />
                        <VictoryPie x="Città" y="Abitanti" />
                    </Viz>*/}
                    
                    <VictoryBar x="city" y="people" />
                    <VictoryPie x="city" y="people" />

                </Widget>
            </CheshireCat>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
