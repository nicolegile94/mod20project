import React from 'react';

function Contact() {
    return (
        <section>
        <div>
            <h1>Contact</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message: </label>
                    <textarea name="message"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>   
    )
};

export default Contact;