import React, { Component } from "react";
import Modal from "react-modal";
import { DefaultPlayer as Video } from "react-html5video";
import ReactYoutube from "react-youtube";
import "react-html5video/dist/styles.css";

class About extends Component {
    state = {
        videoModalOn: false
    };

    modalHandler = action => {
        this.setState({ videoModalOn: action });
    };

    render() {
        const modalStyle = {
            overlay: {
                zIndex: 15
            },
            content: {
                padding: "0",
                background: "",
                border: "none"
            }
        };
        const opts = {
            height: ` 100%`,
            width: `100%`,
            playerVars: {
                autoplay: 1
            }
        };

        const videoPlayer = (
            <Video
                autoPlay
                controls={["Fullscreen", "Seek", "Volume"]}
                poster="#"
                className="video-trailer"
            >
                <source
                    src="https://s3-us-west-2.amazonaws.com/before-the-lottie-video-storage/JAN24TRAILER_final_Miro.mp4"
                    type="video/mp4"
                />
            </Video>
            /*<ReactYoutube
               videoId="gJ7X3POmIOo"
               opts={opts}
               />*/
        );

        return [
            <div key="aboutPage">
                <div className="teaser">
                    <button
                        onClick={() => {
                            this.modalHandler(true);
                        }}
                    >
                        Watch the Trailer
                    </button>
                </div>
                <div className="title-holder">
                    <h1> About </h1>
                    <h2>Before the Plate</h2>
                </div>
                <div className="block">
                    <div className="Farmers">
                        <h4>Farmers</h4>
                        <p>
                            Follow the people who dedicate their lives to
                            growing the food we eat as we answer some of the
                            most pressing questions about modern farming.
                        </p>
                    </div>
                    <div className="Distributors">
                        <h4>Distributors</h4>
                        <p>
                            See the logistics involved in getting food from the
                            field to our plate. We will be featuring 100km Foods
                            Inc, as well as the grocery chain Longo's.
                        </p>
                    </div>
                    <div className="Restaurants">
                        <h4>Restaurants</h4>
                        <p>
                            Experience cooking like never before as we feature
                            head chef John Horne at the highly regarded
                            restaurant Canoe, 54 floors up overlooking the city
                            of Toronto.
                        </p>
                    </div>
                </div>

                <div className="description">
                    <img src="./svg/tractor.svg" width="100" />
                    <h3 className="doc">What is this documentary all about?</h3>
                    <p>
                        "Before the Plate follows John Horne, one of Canada’s
                        most renowned chefs, on an epic journey as he follows
                        each ingredient from one plate of food back to the farms
                        they came from. Beginning in John’s prestigious
                        restaurant Canoe, located on the 54th floor of a
                        downtown Toronto highrise, John’s journey takes him from
                        the busy, urban city to the rustic, rural origins of his
                        ingredients. During his voyage, John investigates some
                        of the most pressing issues facing farmers today, and
                        discovers what it takes to produce food in a rapidly
                        evolving agricultural landscape. Enjoy a rare look at
                        today's food system, as the worlds of agriculture and
                        cooking come crashing together in one mouth-watering
                        Canadian food story.
                    </p>
                </div>

                <div className="block block-2">
                    <h3 className="people"> Who is behind this project? </h3>
                    <div className="person">
                        <h3> Producer </h3>
                        <h4> Dylan Sher</h4>
                        <p>
                            Sher, creative mind behind Before The Plate started
                            the project as a result of experiencing the
                            misinformation about the farming industry first
                            hand. Growing up just outside of Toronto, Dylan’s
                            initial impression of farming came from urban
                            information sources that had a very negative view of
                            modern agricultural practices. After enrolling at
                            the University of Guelph for agricultural business,
                            Dylan has realized the weight and scale of false
                            information that consumers are exposed to which
                            sheds farmers in a bad light. Dylan plans to use his
                            urban upbringing as an advantage to the project as
                            he has a better understanding of areas that are of
                            concern in the cities and what social implications
                            those carry.
                        </p>
                    </div>
                    <div className="person">
                        <h3>Director</h3>
                        <h4> Sagi Kahane-Rapport</h4>
                        <p>
                            Sagi Kahane-Rapport, director of Before The Plate,
                            is an independent filmmaker with a passion for
                            telling stories. Sagi brings his professional work
                            experience in the film industry to the project,
                            including commercial work for clients such as Nike
                            and Telus, and music videos for eOne and Sony Music.
                            Since founding and running his growing film
                            production company, he has directed projects across
                            the spectrum of film, including a TV pilot which was
                            successfully picked up by Rogers Cable Canada. His
                            love of film has taken him and his projects around
                            the world, and he hopes to bring Before The Plate to
                            as wide an audience as possible.
                        </p>
                    </div>
                </div>
            </div>,
            <Modal
                style={modalStyle}
                ariaHideApp={false}
                onRequestClose={() => {
                    this.modalHandler(false);
                }}
                isOpen={this.state.videoModalOn}
            >
                {videoPlayer}
            </Modal>,
            <div
                onClick={() => {
                    this.modalHandler(false);
                }}
                className={`video-x ${
                    this.state.videoModalOn ? "" : "invisible"
                }`}
            >
                X
            </div>
        ];
    }
}

export default About;
