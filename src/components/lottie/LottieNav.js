import React from 'react';
import {anims} from './anims';
import ReactDOM from 'react-dom';
import HomeButton from './svg/homeButtons';

export const LottieNav = (props) => {
    let buttons = [];

    let homeButtons = [
    ];

    const buttonWrap = {
        display: 'flex',
        justifyContent: 'center',
        padding: '35px 0px'
    };

    const buttonStyle = {
        display: 'inline',
        margin: '0px 10px'
    };

    const homeButtonStyle = {
        textTransform: 'uppercase',
        width: '7rem',
        height: '7rem',
        borderRadius: '50%',
        fontSize: '1rem',
        color: '#fff',
        lineHeight: '2',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 20px',

    };
    if (props.view === 'intro') {
        props.navButtons.map((action, i) => {
            let text;
            const JSXButton = (buttonType) => {
                console.log(buttonType);
                if (buttonType === 'btp') {
                    console.log('btp ran motha');
                    return ([

                        <p key={`journey${i}`}> Back to the</p>,
                        <button
                            key={i}
                            className={''}
                            disabled={props.navButtonsDisabled}
                            onMouseEnter={(e) => {action.overlay ? props.clickHandler(e, {type: 'overlay', mouse: 'enter', time_start: action.overlay.start[0], time_end: action.overlay.start[1]}) : '';}}
                            onMouseLeave={(e) => {action.overlay ? props.clickHandler(e, {type: 'overlay', mouse: 'leave', time_start: action.overlay.end[0], time_end: action.overlay.end[1]}) : ''; }}
                            onClick={(e) => {props.clickHandler(e, action);}}
                        >
                            {action.title}
                        </button>,
                        <img key={`fatArrow${i}`} src="./svg/fatarrows-right.svg" />,
                    ]);
                }
                else if (buttonType === 'animation') {
                    console.log('hungry AF');
                    return ([

                        <p key={`journey${i}`}> Begin Journey for </p>,
                        <img key={`fatArrow${i}`} src="./svg/fatarrows-left.svg" />,
                        <button
                            key={i}
                            className={props.navButtonsDisabled ? 'disabled' : ''}
                            disabled={props.navButtonsDisabled}
                            onMouseEnter={(e) => {action.overlay ? props.clickHandler(e, {type: 'overlay', mouse: 'enter', time_start: action.overlay.start[0], time_end: action.overlay.start[1]}) : '';}}
                            onMouseLeave={(e) => {action.overlay ? props.clickHandler(e, {type: 'overlay', mouse: 'leave', time_start: action.overlay.end[0], time_end: action.overlay.end[1]}) : ''; }}
                            onClick={(e) => {props.clickHandler(e, action);}}
                        >
                            {action.title}
                        </button>,
                    ])
                }


            }
            buttons.push((
                <div key={`{buttonParent${i}}`} className={`animated fadeInDown ${action.type === 'animation' ? 'food-button' : 'plate-button'}`}>
                    {text = JSXButton(action.type)}
                </div>
            ));
        });
    } else if (props.view === 'home') {
        anims.start.map((action, i) => {
            action.view = 'intro';
            buttons.push((
                <div
                    className='responsive-buttons'
                    key={i}
                    onClick={(e) => {props.clickHandler(e, action);}}
                    onMouseEnter={(e) => {action.overlay ? props.clickHandler(e, {type: 'overlay', mouse: 'enter', time_start: action.overlay.start[0], time_end: action.overlay.start[1]}) : '';}}
                    onMouseLeave={(e) => {action.overlay ? props.clickHandler(e, {type: 'overlay', mouse: 'leave', time_start: action.overlay.end[0], time_end: action.overlay.end[1]}) : ''; }}
                >
                    <HomeButton type={action.title}/>
                </div>
            ));
        });
    } else if (props.view === 'map' || props.view === 'stop') {
        return '';
    }


    return (
        <div>
            <div className='lottieNav animated fadeInDown' style={buttonWrap} >
                {buttons}
            </div>
        </div>
    );
};
