import React, { Component } from 'react';
import './css/App.css';
import './css/Fonts.css';
// Nav Bar
import {Nav} from './components/Nav';
// All views
import {Main, Donate} from './views/';
import About from './views/About';
import Contact from './views/Contact'
// React Router
import {Route} from 'react-router-dom';

class App extends Component {
    state = {
        navButtonsDisabled: false,
        page: 'home'
    };

    pageHandler = (page) => {
        this.setState({page: page})
    }

    componentWillMount() {
        const location = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
        if (location === '') {
            this.pageHandler('home')
        } else {
            this.pageHandler(location)
        }
    }

    disableNavButtonsHandler = (state) => {
        this.setState({navButtonsDisabled: state})
    }

    render() {
        return (
            <div className={`App ${this.state.page !== 'home' ? 'notHome' : ''}`}>
                <div className='header'>
                    <Nav page={this.state.page} pageHandler={this.pageHandler} />
                </div>

                    {this.state.page === 'home' ? (
                        <div className='info animated fadeInRight'>
                            <h3>Film Coming</h3>
                            <h4>Summer 2018</h4>
                        </div>) : ''}


                    <Route path={'/'} exact component={() => {
                            return (
                                <Main
                                viewMirror={this.viewMirror}
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
