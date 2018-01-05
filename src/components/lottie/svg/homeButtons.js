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
            text = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.25 163.25"><title>Asset 2normal</title><g data-name="Layer 2"><g data-name="Layer 1"><circle cx="81.62" cy="81.63" r="81.63" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 45.25 51.1)" fontSize="27" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0040115em">BEEF</text></g><g data-name="Layer 2"><path d="M49.46 69.47H41c-3.63 1.22 0 3.63 0 3.63l5.12 4.08a2.48 2.48 0 0 1 .94 1.94v9.53a4.94 4.94 0 0 0 .81 2.71c2.68 4.09 11.72 15.26 22.46 0a5 5 0 0 0 .92-2.89v-9.53a2.18 2.18 0 0 1 .81-1.7l4.61-3.7a7.22 7.22 0 0 1 1.12-.72c.77-.41 2-1.39.13-2.93a2.08 2.08 0 0 0-1.33-.47h-9l-.6-.07" fill="none" stroke={this.state.secondary} strokeMiterlimit="10" strokeWidth="2"/><circle cx="54.32" cy="85.19" r="1.81" transform="rotate(-.09 57.2257677 89.1717498)" fill={this.state.secondary} stroke={this.state.secondary} strokeMiterlimit="10"/><circle cx="62.79" cy="85.17" r="1.81" transform="rotate(-.09 63.5919641 89.1767498)" fill={this.state.secondary} stroke={this.state.secondary} strokeMiterlimit="10"/><path d="M59.13 67c-7.32-6.29-9.36-.14-9.66 1.86a1.08 1.08 0 0 0 .31.92c1.65 1.67 9.33 8.55 16.65.74a2.07 2.07 0 0 0 .57-1.34c0-2.43-.82-8.71-9.07-2.14M58 99.69l2.27 21.21a3.06 3.06 0 0 0 2.24 2.65 4 4 0 0 0 4-.9c1.91-1.92 2.3-9.14 2.38-12.06a1.28 1.28 0 0 1 1.28-1.25h29.17a1.44 1.44 0 0 1 1.36.95l3.9 10.68a3.2 3.2 0 0 0 2.75 2.12c1.86.13 4.38-.43 5.11-4.1 1.06-5.36.19-29.73 0-35.19a8.77 8.77 0 0 1 .08-1.71c.3-1.93.46-7.24-8.61-6.62H75.71l-3.32 1.37" fill="none" stroke={this.state.secondary} strokeMiterlimit="10" strokeWidth="2"/><path d="M111.76 77.23s8.47 2.4 8.49 15.71" fill="none" stroke={this.state.secondary} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M84.25 78.76c1-.24 4.25 3.35 5.68 3.88a12.93 12.93 0 0 0 6.14.71 5.85 5.85 0 0 0 4.15-2.5 22.49 22.49 0 0 1 1.54-2.22c.7-.76 1.15-.59 1.77-1.56a1.51 1.51 0 0 0-1.3-2.26c-3 0-5.86.75-8.85.72-2.76 0-6.25-1.12-9-.58-3 .6-2.67 2.93-.85 4.75 3.17 3.18 7.54 7.87 12.39 7.67 5.66-.24 6.1-5.56 9.58-9.06a1.51 1.51 0 0 0-.66-2.51c-2.63-.59-4.38.8-7 1.24a53.31 53.31 0 0 1-9.7.3c-1.77 0-1.94 2.4-.4 2.95 3.85 1.37 6 4.94 10.49 4.48l-1.06-2.56-.72.43 1.16 2.74a6.69 6.69 0 0 0 2.41-2.24c1.17-1.54-1.43-3-2.59-1.51l-1.3 1.17a1.51 1.51 0 0 0 1.16 2.74 3.49 3.49 0 0 0 2-1.2c.83-.86.29-2.7-1.06-2.56-3.8.39-6.36-3.19-9.7-4.37l-.4 2.95c2.84.06 5.68.06 8.51-.16 2-.15 5.62-1.89 7.4-1.49l-.66-2.51a22.11 22.11 0 0 0-3.09 3.54c-.6.93-1 2.61-1.61 3.38-3.68 4.48-9.05-2.9-11.86-4.54a1.72 1.72 0 0 0-1.64-.67l3 .28c1.48.13 3 .29 4.46.33 3.25.09 6.36-.73 9.59-.71l-1.3-2.26c-.45.7-2 1.39-2.62 2.1-1.07 1.16.34 1.54-2.06 2.62a6.84 6.84 0 0 1-3.55 0c-3.85-.73-5.23-5.31-9.27-4.37-1.88.44-1.08 3.33.8 2.89zM74.41 110l16.06-.1a1.56 1.56 0 0 0 1.45-1.1c2.36-5.72-6.76-8.13-10.66-8.74-5.91-.93-8.75 1.63-9.41 7.43-.16 1.44 1.68 1.78 2.56 1.06 3.22-2.63 10.28-2.54 13.76-.52l1.16-2.74c-3.5-1.18-7.47-3.22-11.23-3.19s-4.41 2.66-7 4.63l2.2 1.69c.49-1.73.89-3.18 2.42-4.28 2.15-1.55 4.13-.78 6.34.37 1.71.89 3.23-1.69 1.51-2.59-6.38-3.34-11.22-1.12-13.17 5.7-.33 1.16 1.12 2.51 2.2 1.69 2.45-1.83 3.47-4.78 7.19-4a80.55 80.55 0 0 1 8.77 2.86c1.63.55 2.61-1.9 1.16-2.74-4.86-2.81-13-2.61-17.39 1l2.56 1.06c.49-4.3 3.69-5 7.48-4.17 1.68.39 7.87 1.85 6.7 4.69l1.45-1.1-16.06.1a1.5 1.5 0 0 0 0 3z" fill={this.state.secondary}/><path d="M77.27 108.17h8.67a1.5 1.5 0 0 0 0-3h-8.67a1.5 1.5 0 0 0 0 3zM91.16 80.19c-.34 3.22 3.46 5 6 3.38s3.36-5.85-.24-6.41a7.83 7.83 0 0 0-4.44.6c-1.2.54-2.88 1.58-2.73 3.1s1.74 1.87 3 2a4.1 4.1 0 0 0 2.15-.34c.7-.35 1-1 1.57-1.43 1.6-1.07.1-3.67-1.51-2.59-.51.34-.91 1.09-1.42 1.33a2.14 2.14 0 0 1-1.54-.19l.69.9q-.39 1 .22.37l.33-.21a4.76 4.76 0 0 1 1.09-.46 7.41 7.41 0 0 1 2.33-.08l-.31-.35a2 2 0 0 1-1.06 1.36.86.86 0 0 1-1.17-1c.21-1.92-2.8-1.9-3 0z" fill={this.state.secondary}/></g></g></svg>);
            break;
        case 'Honey':
            text = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163 163"><title>Asset 4normal</title><g data-name="Layer 2"><g data-name="Layer 1"><circle cx="81.5" cy="81.5" r="81.5" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 35 51.1)" fontSize="27" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0040115em">HONEY</text></g><g data-name="Layer 2" fill="none" stroke={this.state.secondary} strokeMiterlimit="10"><path d="M74.5 85s-.91-9.18 7-11.13c0 0 11.25-3.44 11.47 10.45" strokeLinecap="round" strokeWidth="2"/><path d="M82.06 72.62s-2.31-9.22-9.22-8.07M83.21 72.62s3.46-10.38 10.38-8.07" strokeLinecap="round"/><path d="M81.75 83.13L57.84 93.37s-9.22 9.22-1.15 17.3 18.45-3.46 18.45-3.46L82 83.32a.16.16 0 0 0-.25-.19zM84.59 83.08l8.19 24.58v.06c.5.58 8.67 9.7 17.12 2.56s-1.26-18-1.88-18.64h-.07l-23.12-8.79a.19.19 0 0 0-.24.23zM70 112.4s0 13.84 11.53 15 13.84-12.68 13.84-16.14" strokeLinecap="round" strokeWidth="2"/><path strokeWidth="4" d="M69.95 112.25h25.37M76.3 103.13h14.84M71.69 120.43h21.32"/><path strokeLinecap="round" strokeWidth="4" d="M82.64 128.54V132"/></g></g></svg>);
            break;
        case 'Sunflowers':
            text = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163 163"><title>Asset 5normal</title><g data-name="Layer 2"><g data-name="Layer 1"><circle cx="81.5" cy="81.5" r="81.5" transform="rotate(-87.03 81.5028245 81.499383)" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 22.73 50.99)" fontSize="16.3528404" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0039903em">SUNF<tspan x="41.5" y="0" letterSpacing="-.0277961em">L</tspan><tspan x="49.66" y="0" letterSpacing=".0040174em">OWERS</tspan></text></g><g data-name="Layer 2" stroke={this.state.secondary} strokeMiterlimit="10"><circle cx="82.1" cy="95.92" r="11.24" fill={this.state.secondary}/><path d="M79.75 86.08C76 72 82.1 65 82.1 65s6.09 2.11 2.69 21.08M85.71 85.94C90.11 72.07 99 69.42 99 69.42s4 5.05-9.06 19.22M90 89.69c11.5-10.52 21.05-8.79 21.05-8.79s.92 6.43-18.65 13.22M91.19 95.34c15.09-3.92 22.72 2.09 22.72 2.09s-2.2 6.11-22.66 2.95M90.66 101.6c14.4 6 16.86 15.37 16.86 15.37s-5.44 3.55-19.85-11.32M85.76 104.31c6.75 14 2.33 22.7 2.33 22.7s-6.42-1-7.26-21.67M74.51 88.56c-10.67-9.89-9.26-19.08-9.26-19.08S71.52 68 78.77 85.87M71.56 98c-14.17 3.29-21-3-21-3s2.3-6 21.16-2" fill="none" strokeWidth="2"/><path d="M71.62 93c-13.93-4.17-16.73-13-16.73-13s5-4.08 19.37 8.75M80 106c-1.83 14.43-10.11 18.64-10.11 18.64s-4.89-4.2 5.41-20.5M75.18 103.43c-10 12.29-19.84 12.08-19.84 12.08s-1.83-6.25 16.8-16.1" fill="none" strokeWidth="2"/></g></g></svg>);
            break;
        case 'Milk':
            text = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><title>Asset 6normal</title><g data-name="Layer 2"><g data-name="Layer 1"><circle cx="80" cy="80" r="80" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 47 50.1)" fontSize="27" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0040115em">MILK</text></g><g data-name="Layer 2" fill="none" stroke={this.state.secondary} strokeMiterlimit="10" strokeWidth="2"><path d="M70.47 69.31v-5.13A1.18 1.18 0 0 1 71.65 63h20.78a1.18 1.18 0 0 1 1.18 1.18v5.13zM93.61 69.31L85.5 83.49a2.35 2.35 0 0 0-.31 1.16V124h15.95a.88.88 0 0 0 .88-.88V84.66a2.35 2.35 0 0 0-.31-1.16z"/><path d="M85.79 124H61.36a.88.88 0 0 1-.88-.88v-38a2 2 0 0 1 .34-1.1l10-14.75"/><path strokeLinecap="round" d="M60.48 84.56h13.67"/></g></g></svg>);
            break;
        case 'Potatoes':
            text = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><title>Asset 7normal</title><g data-name="Layer 2"><g data-name="Layer 1"><circle cx="80" cy="80" r="80" fill={this.state.primary}/><text transform="matrix(1.1 0 0 1 22 50.58)" fontSize="21.5433598" fill={this.state.secondary} fontFamily="Roboto-Light,Roboto" letterSpacing=".0039973em">P<tspan x="13.35" y="0" letterSpacing="-.0091896em">O</tspan><tspan x="27.73" y="0" letterSpacing="-.0345745em">T</tspan><tspan x="39.85" y="0" letterSpacing="-.0590115em">A</tspan><tspan x="52.04" y="0" letterSpacing="-.0096429em">T</tspan><tspan x="64.69" y="0" letterSpacing=".0039561em">OES</tspan></text></g><g data-name="Layer 2" fill="none" stroke={this.state.secondary} strokeMiterlimit="10" strokeWidth="2"><path d="M90.72 78.28a22.78 22.78 0 0 1-5.6-4.39C80.22 68.65 70 58 58 65c-13.44 7.84-12.38 19.9 5 45 18 26 42 7 45 1s4-13-2-21c-4.53-6-10.77-9.23-15.28-11.72z"/><path strokeLinecap="round" d="M57 84l3-3M74 85l-3 3M66 93l-3 3M64 104l4-4M83 97l-3 3M79 114l3.5-3.5M96 101l3.5-3.5M94 113l2.5-2.5"/></g></g></svg>);
            break;
        default:
            text = '';
        }

        return (
            <div
                onMouseEnter={() => {this.hoverHandler("enter")}}
                onMouseLeave={() => {this.hoverHandler("leave")}}
                style={{width: this.props.width}}>
                {text}
            </div>
        );
    };
};

export default HomeButton;
