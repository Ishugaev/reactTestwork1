import React, { Component } from 'react';
import './App.css';
import hocData from './components/DataComponent';

const DataComponent = hocData();

class App extends Component {
    render() {
        return (
            <div>
                <DataComponent />
            </div>
        )
    }

}

export default App;
