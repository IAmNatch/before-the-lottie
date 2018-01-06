import React from 'react';

export const About = (props) => {
    () => {
        props.pageHandler('about')
    }

    return (
        <div>
        <div className="title-holder">
        <h1> About </h1>
        <h2>Before the Plate</h2>
        </div>
        <div class="block"></div>
        </div>
    )
}
