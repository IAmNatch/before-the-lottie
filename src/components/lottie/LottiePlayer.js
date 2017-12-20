//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Data for Animation
import {anims} from './anims'
// Import Bodymovin
import WideCarousel from '../carousel/WideCarousel';
import bodymovin from 'lottie-web';
import {disableNavButtons, enableNavButtons, toFrames, toMS} from './lottieHelpers'
let lottie;
let core;



class LottiePlayer extends Component {

core = {
    disableNavButtonsHandler: this.props.disableNavButtonsHandler,
    controller: this.animationController
};

animationController = (action) => {
    let
    current = anims[action[0]][action[1]],
    startTimeF = toFrames(current.time_start),
    endTimeF = toFrames(current.time_end),
    startTimeMS = toMS(current.time_start),
    endTimeMS = toMS(current.time_end),
    runTime = (endTimeMS - startTimeMS),
    shouldLoop = current.shouldLoop,
    navButtonsDisabled = current.disableNavButtons,
    post = current.post;

    navButtonsDisabled ? disableNavButtons(this.core) : enableNavButtons(this.core);
    // Plays segment via frame location.
    shouldLoop ? lottie.loop = true : lottie.loop = false;
    console.log(startTimeF);
    console.log(endTimeF);
    lottie.playSegments([startTimeF, endTimeF], true);
    //Enable Buttons after animation completion.

    if (navButtonsDisabled) {
        setTimeout(() => {enableNavButtons(this.core);}, runTime);
    }

    if (post) {
        setTimeout(() => {
            let postStartTimeF = toFrames(post.time_start),
            postEndTimeF = toFrames(post.time_end),
            postShouldLoop = post.shouldLoop;

            //Should Post Animation Loop
            postShouldLoop ? lottie.loop = true : lottie.loop = false;

            lottie.playSegments([postStartTimeF, postEndTimeF], false);
        }, runTime);

    }
}

clickHandler = (action) => {
    this.animationController(action)
}

componentDidMount() {
    lottie = bodymovin.loadAnimation({
        container: ReactDOM.findDOMNode(this.lottieContainer), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: ('./lottieFiles/two_way_move/data.json')  // the path to the animation json
    });
    setTimeout(() => {
        this.animationController(['tests', 'start']);
    }, 1000)

}

    render() {
        // Returns LottiePlayer with callable ref, so bodymovin can attach as container.
        // Returns Button set up to app state.
        return (
            [
            <div key='lottie' className='lottie' ref={(div) => { this.lottieContainer = div; }}></div>,
            <WideCarousel key='lottieControls'>
                <div><button className={this.props.navButtonsDisabled ? 'disabled' : ''} disabled={this.props.navButtonsDisabled} onClick={() => {this.clickHandler(['tests', 'toX'])}}>toX</button></div>
                <div><button className={this.props.navButtonsDisabled ? 'disabled' : ''} disabled={this.props.navButtonsDisabled} onClick={() => {this.clickHandler(['tests', 'xToPlate'])}}>xToPlate</button></div>
                <div><button className={this.props.navButtonsDisabled ? 'disabled' : ''} disabled={this.props.navButtonsDisabled} onClick={() => {this.clickHandler('Bottom_Right')}}>Bottom Right!</button></div>
                <div><button className={this.props.navButtonsDisabled ? 'disabled' : ''} disabled={this.props.navButtonsDisabled} onClick={() => {this.clickHandler('Bottom_Right')}}>Bottom Right!</button></div>
             </WideCarousel>
         ]
        );
    }
};

export default LottiePlayer;
