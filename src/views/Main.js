import React from 'react';
import LottiePlayer from './../components/lottie/LottiePlayer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Main = (props) => {
    const sliderStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        transform: 'translateX(100%)',
        background:'black',
        display:'block',
        width:'100vw',
        height:'100vh'
    };

    const items = [<div style={sliderStyle} key='1'>hello!</div>];

    const slider = (
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {items}
        </ReactCSSTransitionGroup>
    );

    return (
        [
            <LottiePlayer
                key='lottiePlayer'
                view={props.view}
                viewHandler={props.viewHandler}
                navButtonsDisabled={props.navButtonsDisabled}
                disableNavButtonsHandler={props.disableNavButtonsHandler}
            />,
            <div key='footer' className='footer'>
                <div className='title'>
                    <h2>The Film</h2>
                    <h1>Before the Plate</h1>
                </div>
                <div className='byline'>
                The questions, the stories and the people behind where our food comes from and how it gets to our
                </div>
            </div>, <div key='slider'>{slider}</div>]

    );
};
