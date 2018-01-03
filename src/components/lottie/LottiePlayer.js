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
    navButtons: anims.start,
};

core = {
    disableNavButtonsHandler: this.props.disableNavButtonsHandler,
    controller: this.animationController
};

animationController = (action) => {
    let
    current = anims[action.location][action.subSection],
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
    overlay = current.overlay,
    onComplete = current.onComplete;

    if (navButtons) {
        this.setState({navButtons: navButtons})
    }

    navButtonsDisabled ? disableNavButtons(this.core) : enableNavButtons(this.core);
    // Plays segment via frame location.
    shouldLoop ? lottie.loop = true : lottie.loop = false;
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

    if (onComplete) {
        lottie.addEventListener('complete', () => {
            this.props.viewHandler('stop')
            console.log(onComplete);
            console.log('YEE');
            lottie.removeEventListener('complete')
        });
    }
}

overlayController = (action) => {
    lottie.loop = false;
    let startTimeF = toFrames(action.time_start),
    endTimeF = toFrames(action.time_end);

    if (action.mouse === 'enter') {
        lottie.playSegments([startTimeF, endTimeF], true);
    }
    if (action.mouse ==='leave') {
        lottie.playSegments([startTimeF, endTimeF], true);
    }

}

clickHandler = (action) => {
    if (action.type === 'overlay') {
        this.overlayController(action)
    }
    // Later will be for non overlays
    if (action.type === 'animation') {
        this.props.viewHandler(action.view)
        this.animationController(action)
    }

    if (action.type === 'intro') {
        this.props.viewHandler(action.view)
        let introData = anims[action.location][action.subSection]
        console.log(introData);
        this.setState({navButtons: introData.navButtons})
    }
    if (action.type === 'btp') {
        this.props.viewHandler('home')
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
            <LottieNav key='lottieNav' view={this.props.view} navButtons={this.state.navButtons} navButtonsDisabled={this.props.navButtonsDisabled} clickHandler={this.clickHandler} />,
            <div key='lottie' style={{gridArea: "lottie"}} className='lottie'>
                <div style={{height: '100%'}} ref={(div) => { this.lottieContainer = div; }}></div>
            </div>


         ]
        );
    }
};

export default LottiePlayer;
