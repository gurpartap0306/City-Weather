import './App.css';
import Province from './components/component1';
import AboutMe from './components/component2';
import React, { Component } from 'react';



class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 'h'
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className='menu'>
                        <p className="App-link" onClick={() => { this.setState({ page: 'h' }) }}>About me</p>&emsp;
                        <p className="App-link" onClick={() => { this.setState({ page: 'c' }) }}>My Town</p>
                    </div>
                    {this.state.page === 'h' ? <AboutMe /> : <Province />}
                </header>
            </div>
        );
    }
}

export default App;
