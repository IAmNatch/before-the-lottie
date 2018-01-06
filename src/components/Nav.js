import React from 'react';

export const Nav = (props) => {
    let nav;
    if (props.view === 'stop' || props.view === 'map') {
        nav = '';
    }
    else {
        const navList = ['about', 'contact', 'donate'];
        nav = [];
        const navItems = navList.map((item, i) => {
            nav.push(<li key={`navItem${i}`} className='nav-item'><a className='nav-item nav-item-link' href={`/${item}`}>{item}</a></li>)
        })
    }

    return (
        <div className='nav'>
            {nav}
        </div>
    );
};
