import React, { Component } from 'react';
import './css/App.css';
import './css/Fonts.css';
import './css/Lottie.css';
import LottiePlayer from './components/lottie/LottiePlayer';
import {Nav} from './components/Nav'
import {Main} from './views/Main'

class App extends Component {
    state = {
        view: 'home',
        navButtonsDisabled: false,
    };

    disableNavButtonsHandler = (state) => {
        this.setState({navButtonsDisabled: state})
    }

    viewHandler = (view) => {
        this.setState({view: view});
    }

    render() {
        return (
            <div className="App">
                <div className='header'>
                    <Nav view={this.state.view} />
                </div>
                <div className='info'>
                    <h3>Film Coming</h3>
                    <h4>Summer 2018</h4>
                </div>
                <Main
                    view={this.state.view}
                    viewHandler={this.viewHandler}
                    navButtonsDisabled={this.state.navButtonsDisabled}
                    disableNavButtonsHandler={this.disableNavButtonsHandler}
                />
            </div>

        );
    }
}

export default App;
