import React from 'react';
import { Link } from 'react-router-dom'

export const Nav = (props) => {
    let nav;


    if (props.view === 'stop' || props.view === 'map') {
        nav = '';
    }
    else {
        const navList = [{link: 'about', title: 'about'}, {link: 'contact', title: 'contact'}, {link: 'donate', title: 'donate'}];
        nav = [];
        const navItems = navList.map((item, i) => {
            nav.push(<li key={`navItem${i}`} className='nav-item'><Link className='nav-item nav-item-link' onClick={() => {props.pageHandler(item.title)}} to={`/${item.link}`}>{item.title}</Link></li>)
        })
    }

    return (
        <div className='nav'>
            {nav}
        </div>
    );
};
