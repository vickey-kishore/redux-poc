import React, { Component } from 'react';

import CharacterList from './CharacterList';
import '../styles/index.css';
import HeroesList from './HeroesList';
import SquadStats from './SquadStats';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h2>super squad</h2>
                <div className='col-md-4'>
                    <CharacterList />
                </div>
                <div className='col-md-4'>
                    <HeroesList />
                </div>
                <div className="col-md-4">
                    <SquadStats />
                </div>
            </div>

        )
    }
}

export default App;