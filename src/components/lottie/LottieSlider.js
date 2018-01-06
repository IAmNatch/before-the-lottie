import React from 'react';

export const LottieSlider = (props) => {
    const sliderStyle = {
        background:'#f4f4f4',
        width: '100vw',
        transition: '1s ease',
    };

    const sliderWrapStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        display:'block',
        width:'100vw',
        height:'100%',
        overflowX: 'hidden',
    };

    const nextHandler = () => {
        if (props.sliderData.next === 'btp') {
            return (
                {type: 'btp', view: 'home', title:'Back to Plate'}
            );
        }
        else {
            return (
                {type: 'animation', view: 'map', location: props.sliderData.location, subSection: props.sliderData.next}
            )
        }
    }

    return (
        <div key='slider' className={props.view === 'stop' ? 'wrapperHigh' : 'wrapperLowNoDelay wrapperLow'} style={sliderWrapStyle}>
            <div className={props.view === 'stop' ? 'sliderVis' : 'sliderInvis'} style={sliderStyle} key='1'>
                <nav onClick={(e) => {props.clickHandler(e, {type: 'btp', view: 'home', title:'Back to Plate'});}} className="stopNavTop">
                    <img src="./svg/fatarrows-left.svg" /> <p>{props.sliderData && props.sliderData.previousTitle}</p>
                </nav>
                <div className="straightLine"></div>
                <nav
                    onClick={(e) => {props.clickHandler(e, nextHandler());}}
                    className="stopNavTop navLeft">
                    <img  className="right" src="./svg/fatarrows-right.svg" />
                    <p className="right"> {props.sliderData && props.sliderData.next === 'btp' ? 'Back to Plate' : `${props.sliderData && props.sliderData.nextTitle}`}  </p>
                </nav>

                {/* make me dynamic */}
                <div className="tracker">
                    <h4>{props.sliderData && props.sliderData.stepNumber || 0} of 4</h4>
                </div>

                <div className="image">
                    <img src={props.sliderData && props.sliderData.backgroundImage || "./calving.jpg"} />
                </div>

                <div className="content-folder">

                    <div className="text-holder">
                        <p>
                            {    props.sliderData && props.sliderData.description ||
                            `It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                            <br />
                            letters, as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).`}
                        </p>
                    </div>
                    <div onClick={() => {props.modalHandler(true);}} className="button-holder">
                        <img src="./svg/map-point.svg" className="button" />
                        <img src="./svg/button-text.svg" className="button-text" />
                    </div>

                    <nav onClick={(e) => {props.clickHandler(e, {type: 'btp', view: 'home', title:'Back to Plate'});}} className="bottomNav">
                        <p> Back to the Plate </p>
                    </nav>

                </div>

            </div>
        </div>
    );
};
