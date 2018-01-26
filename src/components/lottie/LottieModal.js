import React from 'react';
import Modal from 'react-modal';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export const LottieModal = (props) => {
    let videoUrl = 'https://s3-us-west-2.amazonaws.com/before-the-lottie-video-storage/Dairy+Barn.mp4';

    if (props.modalStatus) {
        videoUrl =  props.videoUrl.videoUrl;
    }

    const modalStyle = {
        overlay : {
            zIndex: 15
        },
        content: {
            padding: '0',
            background: '',
            border: 'none',
        }
    };

    const videoPlayer = (
        <Video autoPlay
            controls={['Fullscreen', 'Seek', 'Volume']}
            poster='#'
            onEnded={() => {props.modalHandler(false);}}
            className='video-slider'
        >

            <source src={videoUrl} type="video/mp4" />
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
