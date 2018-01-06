import React from 'react';

export const Contact = (props) => {
    return (
        <div>
            <form method="POST" action="http://formspree.io/info@sweettoothdigital.com">
                <input type="name" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="subject" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Write your message here!"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
