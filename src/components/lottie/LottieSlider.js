import React from 'react';

export const LottieSlider = (props) => {
    const sliderStyle = {
        background:'#f4f4f4',
     
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
        overflowX: 'hidden'
    };
    const straightLine = {
    borderRight: '6px solid black',
    height: '100px',
    width: '20%',
    display:  'inline-block',
    verticalAlign: 'top'
}

    return (
        <div key='slider' className={props.view === "stop" ? 'wrapperHigh' : 'wrapperLow'} style={sliderWrapStyle}>
            <div className={props.view === "stop" ? 'sliderVis' : 'sliderInvis'} style={sliderStyle} key='1'>
                <nav className="stopNavTop">
                <img src="./svg/fatarrows-left.svg" /> <p> Back to the Plate </p>
                </nav>
                <div className="straightLine"></div>

                {/* make me dynamic */}
               <div className="tracker">
                    <h4>1 of 4</h4>
               </div>

                <div className="image">
                <img src="./tester.jpg" />
                </div>

                <div className="content-folder">

                    <div className="text-holder">
                        <p>
                        It is a long established fact that a reader will be distracted by the readable
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
                        sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>

                    <div className="button-holder">
                    <img src="./svg/button-text.svg" className="button-text" />
                    </div>

                </div>

            </div>
        </div>
    )
}
