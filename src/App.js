import React, { Component } from 'react';
import './css/App.css';
import './css/Fonts.css';
import './css/Lottie.css';
import {Nav} from './components/Nav';
import {Main, Donate, Contact, About} from './views/';
import {Route} from 'react-router-dom';

class App extends Component {
    state = {
        navButtonsDisabled: false,
    };

    disableNavButtonsHandler = (state) => {
        this.setState({navButtonsDisabled: state})
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
                    <Route path='/' exact component={() => {
                            return (
                                <Main
                                navButtonsDisabled={this.state.navButtonsDisabled}
                                disableNavButtonsHandler={this.disableNavButtonsHandler}
                            />
                            )
                        }} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/donate' component={Donate} />

            </div>

        );
    }
}

export default App;
