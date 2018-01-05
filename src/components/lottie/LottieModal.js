import React from 'react';
import Modal from 'react-modal';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export const LottieModal = (props) => {
    const modalStyle = {
        overlay : {
            zIndex: 15
        },
        content: {

        }
    };

    return (
        <Modal
            style={modalStyle}
            ariaHideApp={false}
            isOpen={props.modalStatus}
        >
            <Video autoPlay loop mutedtre
                source           controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="http://sourceposter.jpg">
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/webm" />
            </Video>
        <button onClick={() => {props.modalHandler(false);}}></button>
        </Modal>
    );
};
