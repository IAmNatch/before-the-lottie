import React from 'react';

// Not yet implemented

export const LottieInstructions = (props) => {
    if (props.view === 'home') {
        return (
            <div className='lottie-instructions animated fadeInRightBig'>
                <p>Click on an</p>
                <div></div>
                <p>ingredient</p>
                <div></div>
                <p>to learn more</p>
                <div></div>
                <p>about its journey.</p>
            </div>
        )
    } else {
        return '';
    }
}
