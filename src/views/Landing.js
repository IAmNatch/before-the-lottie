import React, { Component } from "react";
import axios from "axios";

class Events extends Component {
    state = {
        keys: [],
        data: [],
        videoClicked: false
    };
    componentDidMount() {}
    render() {
        return (
            <div class="center-flex-column">
                <div className="content-root landing">
                    <h2 className="site-subtitle">The Trailer</h2>
                    <h1 class="site-title">Before the Plate</h1>
                    <div class="vimeo-block">
                        <div class="embed-container super-wide">
                            <iframe
                                id="vimeo-frame"
                                src="https://player.vimeo.com/video/314529765"
                                frameborder="0"
                                webkitAllowFullScreen
                                mozallowfullscreen
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <p>
                        Before the Plate follows John Horne, one of Canada’s
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
                    <div class="social-wrapper">
                        <div class="social-icons large">
                            <a href="https://www.facebook.com/beforetheplate">
                                <img
                                    height="32"
                                    width="32"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
                                />
                            </a>
                            <a href="https://twitter.com/beforetheplate">
                                <img
                                    height="32"
                                    width="32"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
                                />
                            </a>
                            <a href="http://instagram.com/beforetheplate/">
                                <img
                                    height="32"
                                    width="32"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
                                />
                            </a>
                        </div>
                        <div>
                            <p class="social-tag large">
                                {"Follow the creators' continuing journeys at "}
                                <a href="http://instagram.com/beforetheplate/">
                                    {"@beforetheplate"}
                                </a>
                                {" & "}
                                <a href="http://instagram.com/sagikr/">
                                    {"@sagikr"}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
