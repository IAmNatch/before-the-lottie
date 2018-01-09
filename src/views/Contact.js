import React, { Component } from 'react';

class Contact extends Component {
    state = {
        contactOpen: false
    }

    contactHandler = () => {
        this.setState({contactOpen: !this.state.contactOpen})
    }
    render() {
        return (
            <div  className="form-holder">
                  <div onClick={() => {this.contactHandler()}} className="contact-us"> <h2> CONTACT </h2><h2> US </h2>
            </div>
                <div className={`contact contactAnimation ${this.state.contactOpen ? 'contactClicked' : ''}`}>

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

                <div class="group">
              <input id="title" type="subject" name="subject" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Subject</label>
                </div>

                    <div class="group">
                    <textarea  name="message" id="content" type="text" rows="4" cols="32" placeholder="Message" required></textarea>
                    </div>

                    <button type="submit" id="button1" class="hvr-bubble-float-top">Submit</button>
                </form>
                </div>

            </div>
        )
    }
}

export default Contact;
