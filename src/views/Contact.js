import React from 'react';

export const Contact = (props) => {
    return (
        <div>
            <div className="contact">
            <form method="POST" action="http://formspree.io/info@sweettoothdigital.com">
                <input type="name" name="name" placeholder="Name"  required />
                <div class="group">      
             <input id="title" type="text" required />
                <span class="highlight"></span>
              <span class="bar"></span>
              <label>Title</label>
               </div>
                <input type="email" name="email" placeholder="Email"  required/>
                <div class="group">      
          <input id="author" type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
            </div>
                <input type="subject" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Write your message here!"  required></textarea>

                <div class="group">     
                <textarea id="content" type="text" rows="4" cols="32" placeholder="Entry" required></textarea>
                </div>
                <button type="submit">Send</button>
                <button id="button1" class="hvr-bubble-float-top">Submit</button>
            </form>
            </div>
        </div>
    )
}
