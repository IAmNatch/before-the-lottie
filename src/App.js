import React, { Component } from 'react';
import './css/App.css';
import './css/Fonts.css';
import './css/Lottie.css';
import LottiePlayer from './components/lottie/LottiePlayer';

class App extends Component {
    state = {
        navButtonsDisabled: false
    };

    disableNavButtonsHandler = (state) => {
        this.setState({navButtonsDisabled: state})
    }

    render() {
        return (
            <div className="App">
                {/*<div className="container">*/}
                    <div className="paper">
                        <div className='header'>
                            <h3>The film</h3>
                            <h1>Before the Plate</h1>
                        </div>
                        {/* Nav */}
                        <div className='nav'>
                            <ul>
                                <li className='nav-item'><a className='nav-item' href="#Home">Home</a></li>
                                <li className='nav-item'><a className='nav-item' href="#About">About</a></li>
                                <li className='nav-item'><a className='nav-item' href="#Contact">Contact</a></li>
                            </ul>
                        </div>
                        <p>Hello its sample text, and were so happy about it!</p>
                        <LottiePlayer
                            navButtonsDisabled={this.state.navButtonsDisabled}
                            disableNavButtonsHandler={this.disableNavButtonsHandler} />
                    </div>
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
