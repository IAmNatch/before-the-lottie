//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Data for Animation
import {anims} from './anims'
// Import Bodymovin

import bodymovin from 'lottie-web';
import {LottieNav} from './LottieNav';
import {disableNavButtons, enableNavButtons, toFrames, toMS} from './lottieHelpers'
let lottie;
let core;



class LottiePlayer extends Component {
state = {
    navButtons: anims.start
};

core = {
    disableNavButtonsHandler: this.props.disableNavButtonsHandler,
    controller: this.animationController
};

animationController = (action) => {
    console.log(action);
    let
    current = anims[action[0]][action[1]],
    startTimeF = toFrames(current.time_start),
    endTimeF = toFrames(current.time_end),
    startTimeMS = toMS(current.time_start),
    endTimeMS = toMS(current.time_end),
    runTime = (endTimeMS - startTimeMS),
    shouldLoop = current.shouldLoop,
    navButtonsDisabled = current.disableNavButtons,
    post = current.post,
    hover = current.hover,
    navButtons = current.navButtons,
    overlay = current.overlay;

    if (navButtons) {
        this.setState({navButtons: navButtons})
    }

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

overlayController = (action) => {
    lottie.loop = false;
    let startTimeF = toFrames(action.time_start),
    endTimeF = toFrames(action.time_end);

    if (action.mouse === 'enter') {
        console.log('hovered!');
        lottie.playSegments([startTimeF, endTimeF], true);
    }
    if (action.mouse ==='leave') {
        console.log('unhovered!');
        lottie.playSegments([startTimeF, endTimeF], true);
    }

}

clickHandler = (action) => {
    // Later will be for non overlays
    if (Array.isArray(action)) {
        this.animationController(action)
    }
    if (action.type === 'overlay') {
        this.overlayController(action)
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
    // setTimeout(() => {
    //     this.animationController(['tests', 'start']);
    // }, 1000)

}

    render() {
        // Returns LottiePlayer with callable ref, so bodymovin can attach as container.
        // Returns Button set up to app state.
        return (
            [
            <div key='lottie' className='lottie' ref={(div) => { this.lottieContainer = div; }}></div>,
            <LottieNav navButtons={this.state.navButtons} navButtonsDisabled={this.props.navButtonsDisabled} clickHandler={this.clickHandler} />
         ]
        );
    }
};

export default LottiePlayer;
