import React from 'react';

export const About = (props) => {
    return (
     <div>  <div className="teaser">
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
        </div>
    );
};
