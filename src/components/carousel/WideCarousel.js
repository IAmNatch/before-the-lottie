import React, { Component } from 'react';
import Slider from 'react-slick';
import './carousel.css'


class WideCarousel extends Component {
    nextClick = (e) => {
        console.log(e);
    };

    next = () => {
        this.Carousel.innerSlider.slickNext();
    };
    previous = () => {
        this.Carousel.innerSlider.slickPrev();
    };

    settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: (this.props.buttons.length + 1),
        centerMode: false,
        slidesToScroll: 1,
        list: false,
        afterChange: (e) => {this.nextClick(e);},
        arrows: false,
        className: 'test123'
    }
    render() {
        return (
            <div>
                <Slider ref={(Slider) => { this.Carousel = Slider; }} {...this.settings}>
                    {this.props.children}
                </Slider>
                <div style={{textAlign: 'center'}}>
                    <button className='button' onClick={this.previous}>Previous</button>
                    <button className='button' onClick={this.next}>Next</button>
                </div>
            </div>

        );
    }
};

export default WideCarousel;
