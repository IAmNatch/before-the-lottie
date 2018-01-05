import React from 'react';
import LottiePlayer from './../components/lottie/LottiePlayer';

export const Main = (props) => {


    return (
        [
            <LottiePlayer
                key='lottiePlayer'
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
            </div>]

    );
};
