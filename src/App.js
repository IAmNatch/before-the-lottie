import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import './css/Fonts.css';
import './css/Lottie.css';
import WideCarousel from './components/carousel/WideCarousel';

// Components
import bodymovin from 'lottie-web';
let lottie;

class App extends Component {
    state = {
        buttonsDisabled: false
    }

    clickHandler = (direction) => {
        console.log(lottie);
        console.log(bodymovin);
        switch (direction) {
            case "Bottom_Right":
                this.setState({buttonsDisabled: true})
                lottie.goToAndPlay(10000);
                console.log("Bottom_Right");
                setTimeout(() => {
                    this.setState({
                        buttonsDisabled: false
                    })
                }, 5000)
                break;
            case "Bottom_Left":
                lottie.playSegments([0, 5000], true)
                console.log('bottom left');
                break;
            default:
            console.log('default occured!');
            break;
        }
    }

    componentDidMount() {
        lottie = bodymovin.loadAnimation({
            container: ReactDOM.findDOMNode(this.lottieContainer), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: ('./lottieFiles/two_way_move/data.json')  // the path to the animation json
        });
    }

    componentWillUpdate() {

    }
    render() {
        return (
            <div className="App">
                <div className="container">
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
                        <div className='lottie' ref={(div) => { this.lottieContainer = div; }}></div>

                        <WideCarousel>
                            <div><button className={this.state.buttonsDisabled ? 'disabled' : ''} disabled={this.state.buttonsDisabled} onClick={() => {this.clickHandler('Bottom_Left')}}>Bottom Left</button></div>
                            <div><button className={this.state.buttonsDisabled ? 'disabled' : ''} disabled={this.state.buttonsDisabled} onClick={() => {this.clickHandler('Bottom_Right')}}>Bottom Right!</button></div>
                            <div><button className={this.state.buttonsDisabled ? 'disabled' : ''} disabled={this.state.buttonsDisabled} onClick={() => {this.clickHandler('Bottom_Right')}}>Bottom Right!</button></div>
                            <div><button className={this.state.buttonsDisabled ? 'disabled' : ''} disabled={this.state.buttonsDisabled} onClick={() => {this.clickHandler('Bottom_Right')}}>Bottom Right!</button></div>
                         </WideCarousel>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
