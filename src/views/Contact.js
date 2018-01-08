import React from 'react';

export const Contact = (props) => {
    return (
        <div>
              <div className="contact-us"> <h2> Contact us! </h2>
        </div>
            <div className="contact">

      
            <form method="POST" action="http://formspree.io/info@sweettoothdigital.com">
                
                <div class="group">      
             <input id="title" type="text" name="name" required />
                <span class="highlight"></span>
              <span class="bar"></span>
              <label>Title</label>
               </div>

                <div class="group">      
          <input id="author" type="email" name="email" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
            </div>


                <input type="subject" name="subject" placeholder="Subject" />
               

                <div class="group">     
                <textarea  name="message" id="content" type="text" rows="4" cols="32" placeholder="Entry" required></textarea>
                </div>

                <button type="submit" id="button1" class="hvr-bubble-float-top">Submit</button>
            </form>
            </div>

        </div>
    )
}
