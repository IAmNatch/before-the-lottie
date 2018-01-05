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

    const videoPlayer = (
        <Video autoPlay
            controls={['Fullscreen', 'Seek']}
            onEnded={() => {props.modalHandler(false);}}
        >

            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/webm" />
        </Video>
    );

    return (
        <Modal
            style={modalStyle}
            ariaHideApp={false}
            onRequestClose={() => {props.modalHandler(false);}}
            isOpen={props.modalStatus}
        >
            {videoPlayer}
        </Modal>
    );
};
