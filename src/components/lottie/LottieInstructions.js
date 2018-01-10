import React from 'react';

// Not yet implemented

export const LottieInstructions = (props) => {
    if (props.view === 'home') {
        return (
            <div className='lottie-instructions animated fadeInRightBig'>
            <div className="test">
                 <img src="./svg/up-arrow.svg"  />
            </div>
                <p>click on an</p>
                <div></div>
                <p>ingredient</p>
                <div></div>
                <p>to learn</p>
                <div></div>
                <p>more about</p>
                <div></div>
                <p>its journey</p>
                <div></div>
                <p>to the plate</p>
                
            </div>
        )
    } else {
        return '';
    }
}
