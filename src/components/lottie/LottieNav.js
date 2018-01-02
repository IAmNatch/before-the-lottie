import React from 'react';
import WideCarousel from '../carousel/WideCarousel';
import {anims} from './anims'

export const LottieNav = (props) => {
    let buttons = []

    const buttonWrap = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '30px'
    }

    const buttonStyle = {
        display: 'inline',
        margin: '0px 10px'
    }

    console.log(props.navButtons);
    props.navButtons.map((action, i) => {
        buttons.push((
            <div style={buttonStyle} key={i}>
                <button
                    className={props.navButtonsDisabled ? 'disabled' : ''}
                    disabled={props.navButtonsDisabled}
                    onMouseEnter={() => {action.overlay ? props.clickHandler({type: 'overlay', mouse: 'enter', time_start: action.overlay.start[0], time_end: action.overlay.start[1]}) : ''}}
                    onMouseLeave={() => {action.overlay ? props.clickHandler({type: 'overlay', mouse: 'leave', time_start: action.overlay.end[0], time_end: action.overlay.end[1]}) : '' }}
                    onClick={() => {props.clickHandler([action.location, action.subSection]);}}
                >
                    {action.title}
                </button>
            </div>
        ));
    })



    return (
        <div>
            <div style={buttonWrap} >
                {buttons}
            </div>
        </div>
    )
}
