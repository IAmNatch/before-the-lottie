import React from 'react';

export const Nav = (props) => {
    let nav;
    if (props.view === 'stop' || props.view === 'map') {
        nav = '';
    }
    else {
        nav = (
            <ul>
                <li className='nav-item'><a className='nav-item' href="/">home</a></li>
                <li className='nav-item'><a className='nav-item' href="/contact">contact</a></li>
                <li className='nav-item'><a className='nav-item' href="/donate">donate</a></li>
            </ul>
        );
    }

    return (
        <div className='nav'>
            {nav}
        </div>
    );
};
