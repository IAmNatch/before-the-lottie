import React from 'react';
import {anims} from './anims';
import ReactDOM from 'react-dom';
import HomeButton from './svg/homeButtons';

export const LottieNav = (props) => {
    let buttons = [];

    let homeButtons = [
    ]

    const buttonWrap = {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0px'
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
            buttons.push((
                <div style={buttonStyle} key={i}>
                    <button
                        className={props.navButtonsDisabled ? 'disabled' : ''}
                        disabled={props.navButtonsDisabled}
                        onMouseEnter={() => {action.overlay ? props.clickHandler({type: 'overlay', mouse: 'enter', time_start: action.overlay.start[0], time_end: action.overlay.start[1]}) : '';}}
                        onMouseLeave={() => {action.overlay ? props.clickHandler({type: 'overlay', mouse: 'leave', time_start: action.overlay.end[0], time_end: action.overlay.end[1]}) : ''; }}
                        onClick={() => {props.clickHandler(action);}}
                    >
                        {action.title}
                    </button>
                </div>
            ));
        });
    } else if (props.view === 'home') {
        anims.start.map((action, i) => {
            action.view = 'intro';
            buttons.push((
                <div
                    key={i}
                    onClick={() => {props.clickHandler(action);}}
                    onMouseEnter={() => {action.overlay ? props.clickHandler({type: 'overlay', mouse: 'enter', time_start: action.overlay.start[0], time_end: action.overlay.start[1]}) : '';}}
                    onMouseLeave={() => {action.overlay ? props.clickHandler({type: 'overlay', mouse: 'leave', time_start: action.overlay.end[0], time_end: action.overlay.end[1]}) : ''; }}
                >
                    <HomeButton type={action.title} width={'80px'}/>
                </div>
            ));
        });
    } else if (props.view === 'map' || props.view === 'stop') {
        return '';
    }


    return (
        <div>
            <div className='lottieNav' style={buttonWrap} >
                {buttons}
            </div>
        </div>
    );
};
