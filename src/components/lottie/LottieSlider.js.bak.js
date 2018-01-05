import React from 'react';

export const LottieSlider = (props) => {
    const sliderStyle = {
        background:'black',
        height: '100vh',
        width: '100vw',
        transition: '1s ease'
    };

    const sliderWrapStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        display:'block',
        width:'100vw',
        height:'100vh',
        overflow: 'hidden'
    };

    return (
        <div key='slider' className={props.view === 'stop' ? 'wrapperHigh' : 'wrapperLow'} style={sliderWrapStyle}>
            <div className={props.view === 'stop' ? 'sliderVis' : 'sliderInvis'} style={sliderStyle} key='1'>
                
            </div>
        </div>
    );
};
