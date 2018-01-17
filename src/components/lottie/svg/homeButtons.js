import React, {Component} from 'react';

class HomeButton extends Component {
    state = {
        primary: '#282828',
        secondary: '#f4f4f4',
    }

    hoverHandler = (direction) => {
        if (direction === 'enter') {
            this.setState({
                primary: '#f4f4f4',
                secondary: '#282828',
            })
        }if (direction === 'leave') {
            this.setState({
                primary: '#282828',
                secondary: '#f4f4f4',
            })
        }

    };
    render() {
        let text;

        switch(this.props.type) {
        case 'Beef':
            text = (<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.8 168.5">
          <circle cx="82.9" cy="84.4" r="81.6" fill={this.state.primary}/>
          <text transform="matrix(1.1 0 0 1 46.5 53.853)" font-size="27" font-family="Roboto-Light" fill={this.state.secondary}>
            BEEF
          </text>
          <path class="st4" fill='none' stroke-width="2" stroke={this.state.secondary} d="M50.7 72.2h-8.5c-3.6 1.2 0 3.6 0 3.6l5.1 4.1c.6.5.9 1.2.9 1.9v9.5c0 1 .3 1.9.8 2.7 2.7 4.1 11.7 15.3 22.5 0 .6-.8.9-1.9.9-2.9v-9.5c0-.7.3-1.3.8-1.7l4.6-3.7c.3-.3.7-.5 1.1-.7.8-.4 2-1.4.1-2.9-.4-.3-.8-.5-1.3-.5h-9l-.6-.1"/>
          <circle class="st5" fill={this.state.secondary} stroke={this.state.primary} cx="55.6" cy="87.9" r="1.8"/>
          <circle class="st5" fill={this.state.secondary} stroke={this.state.primary} cx="64" cy="87.9" r="1.8"/>
          <path stroke={this.state.secondary} stroke-width="2" fill='none' d="M60.4 69.8c-7.3-6.3-9.4-.2-9.7 1.8-.1.3.1.7.3.9 1.7 1.7 9.3 8.6 16.7.8.3-.4.6-.9.6-1.4 0-2.4-.8-8.7-9.1-2.2M59.2 102.4l2.2 21.2c.1 1.3 1 2.3 2.2 2.7 1.2.3 2.8.3 4-.9 1.9-1.9 2.3-9.1 2.4-12.1 0-.7.6-1.2 1.3-1.2h29.2c.6 0 1.1.4 1.4 1l3.9 10.7c.4 1.2 1.5 2 2.8 2.1 1.9.1 4.4-.4 5.1-4.1 1.1-5.4.2-29.7 0-35.2 0-.6 0-1.1.1-1.7.3-1.9.5-7.2-8.6-6.6H77l-3.3 1.4"/>
          <path d="M113 80s8.5 2.4 8.5 15.7" stroke={this.state.secondary} stroke-width="2" stroke-linecap="round" stroke-miterlimit="10"/>
        </svg>
          );
            break;
        case 'Honey':
            text = (<svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163 163"><title>Asset 4normal</title><g data-name="Layer 2" className='nav-svg-symbol'><g data-name="Layer 1"><circle cx="81.5" cy="81.5" r="81.5" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 35 51.1)" fontSize="27" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0040115em">HONEY</text></g><g data-name="Layer 2" className='nav-svg-symbol' fill="none" stroke={this.state.secondary} strokeMiterlimit="10"><path d="M74.5 85s-.91-9.18 7-11.13c0 0 11.25-3.44 11.47 10.45" strokeLinecap="round" strokeWidth="2"/><path d="M82.06 72.62s-2.31-9.22-9.22-8.07M83.21 72.62s3.46-10.38 10.38-8.07" strokeLinecap="round"/><path d="M81.75 83.13L57.84 93.37s-9.22 9.22-1.15 17.3 18.45-3.46 18.45-3.46L82 83.32a.16.16 0 0 0-.25-.19zM84.59 83.08l8.19 24.58v.06c.5.58 8.67 9.7 17.12 2.56s-1.26-18-1.88-18.64h-.07l-23.12-8.79a.19.19 0 0 0-.24.23zM70 112.4s0 13.84 11.53 15 13.84-12.68 13.84-16.14" strokeLinecap="round" strokeWidth="2"/><path strokeWidth="4" d="M69.95 112.25h25.37M76.3 103.13h14.84M71.69 120.43h21.32"/><path strokeLinecap="round" strokeWidth="4" d="M82.64 128.54V132"/></g></g></svg>);
            break;
        case 'Sunflowers':
            text = (<svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163 163"><title>Asset 5normal</title><g data-name="Layer 2" className='nav-svg-symbol'><g data-name="Layer 1"><circle cx="81.5" cy="81.5" r="81.5" transform="rotate(-87.03 81.5028245 81.499383)" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 22.73 50.99)" fontSize="16.3528404" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0039903em">SUNF<tspan x="41.5" y="0" letterSpacing="-.0277961em">L</tspan><tspan x="49.66" y="0" letterSpacing=".0040174em">OWERS</tspan></text></g><g data-name="Layer 2" className='nav-svg-symbol' stroke={this.state.secondary} strokeMiterlimit="10"><circle cx="82.1" cy="95.92" r="11.24" fill={this.state.secondary}/><path d="M79.75 86.08C76 72 82.1 65 82.1 65s6.09 2.11 2.69 21.08M85.71 85.94C90.11 72.07 99 69.42 99 69.42s4 5.05-9.06 19.22M90 89.69c11.5-10.52 21.05-8.79 21.05-8.79s.92 6.43-18.65 13.22M91.19 95.34c15.09-3.92 22.72 2.09 22.72 2.09s-2.2 6.11-22.66 2.95M90.66 101.6c14.4 6 16.86 15.37 16.86 15.37s-5.44 3.55-19.85-11.32M85.76 104.31c6.75 14 2.33 22.7 2.33 22.7s-6.42-1-7.26-21.67M74.51 88.56c-10.67-9.89-9.26-19.08-9.26-19.08S71.52 68 78.77 85.87M71.56 98c-14.17 3.29-21-3-21-3s2.3-6 21.16-2" fill="none" strokeWidth="2"/><path d="M71.62 93c-13.93-4.17-16.73-13-16.73-13s5-4.08 19.37 8.75M80 106c-1.83 14.43-10.11 18.64-10.11 18.64s-4.89-4.2 5.41-20.5M75.18 103.43c-10 12.29-19.84 12.08-19.84 12.08s-1.83-6.25 16.8-16.1" fill="none" strokeWidth="2"/></g></g></svg>);
            break;
        case 'Milk':
            text = (<svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><title>Asset 6normal</title><g data-name="Layer 2" className='nav-svg-symbol'><g data-name="Layer 1"><circle cx="80" cy="80" r="80" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 47 50.1)" fontSize="27" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0040115em">MILK</text></g><g data-name="Layer 2" className='nav-svg-symbol' fill="none" stroke={this.state.secondary} strokeMiterlimit="10" strokeWidth="2"><path d="M70.47 69.31v-5.13A1.18 1.18 0 0 1 71.65 63h20.78a1.18 1.18 0 0 1 1.18 1.18v5.13zM93.61 69.31L85.5 83.49a2.35 2.35 0 0 0-.31 1.16V124h15.95a.88.88 0 0 0 .88-.88V84.66a2.35 2.35 0 0 0-.31-1.16z"/><path d="M85.79 124H61.36a.88.88 0 0 1-.88-.88v-38a2 2 0 0 1 .34-1.1l10-14.75"/><path strokeLinecap="round" d="M60.48 84.56h13.67"/></g></g></svg>);
            break;
        case 'Potatoes':
            text = (<svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><title>Asset 7normal</title><g data-name="Layer 2" className='nav-svg-symbol'><g data-name="Layer 1"><circle cx="80" cy="80" r="80" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 22 50.58)" fontSize="21.5433598" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0039973em">P<tspan x="13.35" y="0" letterSpacing="-.0091896em">O</tspan><tspan x="27.73" y="0" letterSpacing="-.0345745em">T</tspan><tspan x="39.85" y="0" letterSpacing="-.0590115em">A</tspan><tspan x="52.04" y="0" letterSpacing="-.0096429em">T</tspan><tspan x="64.69" y="0" letterSpacing=".0039561em">OES</tspan></text></g><g data-name="Layer 2" className='nav-svg-symbol' fill="none" stroke={this.state.secondary} strokeMiterlimit="10" strokeWidth="2"><path d="M90.72 78.28a22.78 22.78 0 0 1-5.6-4.39C80.22 68.65 70 58 58 65c-13.44 7.84-12.38 19.9 5 45 18 26 42 7 45 1s4-13-2-21c-4.53-6-10.77-9.23-15.28-11.72z"/><path strokeLinecap="round" d="M57 84l3-3M74 85l-3 3M66 93l-3 3M64 104l4-4M83 97l-3 3M79 114l3.5-3.5M96 101l3.5-3.5M94 113l2.5-2.5"/></g></g></svg>);
            break;
        default:
            text = '';
        }

        return (
            <div
                className='nav-item-wrap'
                onMouseEnter={() => {this.hoverHandler("enter")}}
                onMouseLeave={() => {this.hoverHandler("leave")}}
                style={{width: this.props.width}}>
                {text}
            </div>
        );
    };
};

export default HomeButton;
