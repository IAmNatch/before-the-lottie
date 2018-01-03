import React, { Component } from 'react';
import './css/App.css';
import './css/Fonts.css';
import './css/Lottie.css';
import {Nav} from './components/Nav';
import {Main, Donate, Contact} from './views/';
import {Route} from 'react-router-dom';

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
                    <Route path='/' exact component={() => {
                            return (
                                <Main
                                view={this.state.view}
                                viewHandler={this.viewHandler}
                                navButtonsDisabled={this.state.navButtonsDisabled}
                                disableNavButtonsHandler={this.disableNavButtonsHandler}
                            />
                            )
                        }} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/donate' component={Donate} />

            </div>

        );
    }
}

export default App;
