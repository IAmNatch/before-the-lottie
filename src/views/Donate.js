import React from 'react';

export const Donate = (props) => {
    return (
        <div>
    
            <form className="payPall-button" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" target="_blank">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="4Q92TDWKDLFP2" />
 <input type="image" src="./svg/beef.svg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

        </div>
    )
}
