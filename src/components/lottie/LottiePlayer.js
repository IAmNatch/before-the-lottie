//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Data for Animation
import {anims} from './anims'
// Import Bodymovin
import bodymovin from 'lottie-web';
//Lottie Sub-Components
import {LottieNav, LottieSlider, LottieModal, LottieInstructions} from './'
// Lottie Helpers
import {disableNavButtons, enableNavButtons, toFrames, toMS} from './lottieHelpers'

// Initilize Globals
let lottie;
let core;


class LottiePlayer extends Component {
    state = {
        navButtons: anims.start,
        view: 'home',
        modalStatus: false
    };

    // core = {
    //     disableNavButtonsHandler: this.props.disableNavButtonsHandler,
    //     controller: this.animationController
    // };

    modalHandler = (state, action) => {
        this.setState({modalStatus: state});
    }

    viewHandler = (view) => {
        this.setState({view: view});
    }

    animationController = (action) => {

        this.viewHandler('map')
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

        // // Plays segment via frame location.
        lottie.loop = false;
        lottie.playSegments([startTimeF, endTimeF], true);

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
                if (current.nextStop === 'btp') {
                    console.log('backtoplate happened');
                    this.viewHandler('home')
                } else {
                    this.setState({sliderData: anims[current.location][current.nextStop]});
                    this.viewHandler('stop')
                }

                lottie.removeEventListener('complete')
            });
        }
    }

    introController = (action) => {
        this.setState({navButtons: anims[action.location][action.subSection].navButtons, view: "intro"});
    }

    overlayController = (action) => {
        lottie.loop = true;
        let startTimeF = toFrames(action.time_start),
        endTimeF = toFrames(action.time_end);

        if (action.mouse === 'enter') {
            lottie.playSegments([startTimeF, endTimeF], true);
        }
        if (action.mouse ==='leave') {
            lottie.loop = false;
            lottie.playSegments([1, 1], true);
        }

    }

    clickHandler = (e, action) => {
        e.preventDefault();
        if (action.type === 'overlay') {
            this.overlayController(action)
        }
        // Later will be for non overlays
        if (action.type === 'animation') {
            this.animationController(action)
        }
        if (action.type === 'intro') {
            this.introController(action);
        }
        if (action.type === 'btp') {
            lottie.playSegments([240, 245], true);
            this.viewHandler('home')
        }
    }

    componentDidMount() {
        lottie = bodymovin.loadAnimation({
            container: ReactDOM.findDOMNode(this.lottieContainer), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
                scalemode: 'fit'
            },
            path: ('./lottieFiles/two_way_move/data.json')  // the path to the animation json
        });
        // Initilize Lottie On Screen by playing 1 frame of the animation and then pausing.
        lottie.setSpeed(1.2);
        lottie.playSegments([1, 2], true);
        setTimeout(() => {
            lottie.pause()
        }, 1000)
    }

    render() {

        // Returns LottiePlayer with callable ref, so bodymovin can attach as container.
        // Also returns side-slider for use during animations and the LottieNav
        return (
            [<LottieSlider key='lottieSlider' sliderData={this.state.sliderData} modalHandler={this.modalHandler} view={this.state.view} clickHandler={this.clickHandler}/>, <LottieNav key='lottieNav' view={this.state.view} navButtons={this.state.navButtons} navButtonsDisabled={this.props.navButtonsDisabled} clickHandler={this.clickHandler}/>,
        <div key='lottieMain' style={{gridArea: "lottie"}} className='lottie'>
                <div style={{height: '100%'}} ref={(div) => { this.lottieContainer = div; }}></div>
            </div>, <LottieInstructions className='LottieInstructions' key='LottieInstructions' view={this.state.view} />, <LottieModal key='lottieModal' modalStatus={this.state.modalStatus} modalHandler={this.modalHandler}/>
        ]
        );
    }
};

export default LottiePlayer;
