import React from 'react';
import './Contact.css';

function Contact(props){
    return(
        <div className="test">
            <h1>{props.name} Contact page</h1>
            <label>Email id</label>
            <input type="text" />
            <br/>
            <label>Message</label>
            <br/>
            <textarea>

            </textarea>
            <button>send</button>
            <br/>

        </div>
    );
}
export default Contact;