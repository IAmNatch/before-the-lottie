import React, {Component} from 'react';
import Modal from 'react-modal';

export const LottieSlider = (props) => {

    const sliderStyle = {
            background:'#f4f4f4',
            width: '100vw',
            transition: '1s ease'
        };

    const sliderWrapStyle = {
<<<<<<< HEAD
            position: 'absolute',
            top: '0',
            left: '0',
            display:'block',
            width:'100vw',
            height:'100vh',
            overflowX: 'hidden'
        };
=======
        position: 'absolute',
        top: '0',
        left: '0',
        display:'block',
        width:'100vw',
        height:'100vh',
        overflowX: 'hidden'
    };

    return (
        <div key='slider' className={props.view === 'stop' ? 'wrapperHigh' : 'wrapperLow'} style={sliderWrapStyle}>
            <div className={props.view === 'stop' ? 'sliderVis' : 'sliderInvis'} style={sliderStyle} key='1'>
                <nav onClick={(e) => {props.clickHandler(e, {type: 'btp', view: 'home', title:'Back to Plate'})}} className="stopNavTop">
                    <img src="./svg/fatarrows-left.svg" /> <p> Last  </p>
                </nav>
                <div className="straightLine"></div>
                <nav onClick={(e) => {props.clickHandler(e, {type: 'btp', view: 'home', title:'Back to Plate'})}} className="stopNavTop navLeft">
                <img  className="right" src="./svg/fatarrows-right.svg" />
                     <p className="right"> Next  </p>
     
                </nav>

                {/* make me dynamic */}
                <div className="tracker">
                    <h4>1 of 4</h4>
                </div>
>>>>>>> d5fc70ede1a8c563629eae238d83f1b17930c0d3

    const modalStyle = {
        overlay : {
        zIndex       : '15'
        }
    }

        return (
            <div key='slider' className={props.view === 'stop' ? 'wrapperHigh' : 'wrapperLow'} style={sliderWrapStyle}>
                <div className={props.view === 'stop' ? 'sliderVis' : 'sliderInvis'} style={sliderStyle} key='1'>
                    <nav onClick={(e) => {props.clickHandler(e, {type: 'btp', view: 'home', title:'Back to Plate'});}} className="stopNavTop">
                        <img src="./svg/fatarrows-left.svg" /> <p> Back to the Plate </p>
                    </nav>
                    <div className="straightLine"></div>

                    {/* make me dynamic */}
                    <div className="tracker">
                        <h4>{props.pageNumber || 0} of 4</h4>
                    </div>

<<<<<<< HEAD
                    <div className="image">
                        <img src={props.background || './tester.jpg'} />
                    </div>

                    <div className="content-folder">

                        <div className="text-holder">
                            <p>{props.description ||
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
                            sometimes by accident, sometimes on purpose (injected humour and the like).`}</p>
                        <button onClick={() => {props.modalHandler(true)}}>enter!!</button>
                        </div>

                        <div className="button-holder">
                            <img src="./svg/button-text.svg" className="button-text" />
                        </div>
=======
                    <div className="button-holder">
                    <img src="./svg/map-point.svg" className="button" />
                        <img src="./svg/button-text.svg" className="button-text" />
                    </div>

                <nav onClick={(e) => {props.clickHandler(e, {type: 'btp', view: 'home', title:'Back to Plate'})}} className="bottomNav">
                    <img src="./svg/fatarrows-left.svg" /> <p> Back to the Plate </p>
                </nav>

                </div>
>>>>>>> d5fc70ede1a8c563629eae238d83f1b17930c0d3

                    </div>
                    <Modal
                        isOpen={props.modalStatus}
                        contentLabel="Modal"
                        ariaHideApp={false}
                        style={modalStyle}
                    >
                    Hello I'm bob
                    <button onClick={() => {props.modalHandler(false)}}>Exit</button>
                    </Modal>
                </div>
            </div>
        );
    };
