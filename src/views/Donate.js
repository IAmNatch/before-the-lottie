import React from 'react';

export const Donate = (props) => {
    return (
        <div>
            
            <div className="donate-intro">
                    <h3> We still need your help!</h3>
            </div>
            <div className="donate-now">
                    <h1> Who is funding this project?</h1>
                    <p> People just like you!  </p>
        
            </div>
            <form className="payPall-button" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" target="_blank">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="4Q92TDWKDLFP2" />
 <input type="image" src="./svg/donate.svg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
<p className="donate-text"> Fear is a big business. Many films and documentaries out there on the topic of farming are largely funded by industry groups to try to push a certain agenda. Our goal is to create a film, purely backed by crowd funding and private donations, that does not have to answer to any higher up organizations or companies, so that we can honestly and fairly represent the Canadian farming industry. We will consider each donation offer carefully before accepting any funds for the production of this project and will NOT accept any funds from an organization we feel will compromise the integrity of the project and our projected message.  
    </p>
</form>


        </div>
    )
}
