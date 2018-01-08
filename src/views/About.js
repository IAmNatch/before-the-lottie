import React, {Component} from 'react';
import VideoPlayer from 'react-modal-video';

class About extends Component {
    state = {
        videoModal: true
    };
    render() {
        return (
         [<div>
             <div className="teaser">
            <button> Watch the Teaser </button>
            </div>
                <div className="title-holder">
                    <h1> About </h1>
                    <h2>Before the Plate</h2>

                </div>
                <div className="block">
                <div className="Farmers"><h4>Farmers</h4> <p> Follow the people who dedicate their lives to growing the food we eat as we answer some of the most pressing questions about modern farming.</p></div>
                <div className="Distributors"><h4>Distributors</h4> <p>See the logistics involved in getting food from the field to our plate. We will be featuring 100km Foods Inc, as well as the grocery chain Longo's.</p></div>
                <div className="Restaurants"><h4>Restaurants</h4> <p>Experience cooking like never before as we feature head chef John Horne at the highly regarded restaurant Canoe, 54 floors up overlooking the city of Toronto.  </p> </div>

                </div>

                <div className="description">
                <img src="./svg/tractor.svg" width="100"/>
                <h3 className="doc"> What is this documentary all about? </h3>
                <p>
                Before The Plate attempts to close the gap in perception between the urban consumer and farming in Canada.
                Modern consumers are increasingly interested in where and how their food gets to them, but accurate information is
                hard to come by and often feels out of reach. Before The Plate follows young farmers and industry experts in order
                to show the general population what a modern Canadian farm operation looks like, and answer the most pressing questions
                consumers have about their food. The film will follow food staples of the Canadian diet all the way from the farm to the
                harvesting and processing operations, and showcase the final product at Canoe, one of Toronto's most prestigious restaurants.
                 The goal is to submit the finished documentary to the Toronto International Film Festival, as well as other influential film festivals in 2018.
                 The project will follow various types of agriculture, including both organic and conventional practices to answer some of the biggest
                 questions related to farming in our society. </p>
                 </div>

                 <div className="block block-2">
                 <h3 className="people">  Who is behind this project? </h3>
                    <div className="person"> <h3> Producer </h3><h4> Dylan Sher</h4> <p>Sher, creative mind behind Before The Plate started the project as a result of experiencing the misinformation about the farming industry first hand. Growing up just outside of Toronto, Dylan’s initial impression of farming came from urban information sources that had a very negative view of modern agricultural practices. After enrolling at the University of Guelph for agricultural business, Dylan has realized the weight and scale of false information that consumers are exposed to which sheds farmers in a bad light. Dylan plans to use his urban upbringing as an advantage to the project as he has a better understanding of areas that are of concern in the cities and what social implications those carry.  </p></div>
                    <div className="person"> <h3>Director</h3><h4> Sagi Kahane-Rapport</h4> <p> Sagi Kahane-Rapport, director of Before The Plate, is an independent filmmaker with a passion for telling stories. Sagi brings his professional work experience in the film industry to the project, including commercial work for clients such as Nike and Telus, and music videos for eOne and Sony Music. Since founding and running his growing film production company, he has directed projects across the spectrum of film, including a TV pilot which was successfully picked up by Rogers Cable Canada. His love of film has taken him and his projects around the world, and he hopes to bring Before The Plate to as wide an audience as possible. </p> </div>
                </div>


            </div>]
        );
    };
}


export default About;
