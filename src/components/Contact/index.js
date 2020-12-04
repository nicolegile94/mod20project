import React from 'react';

function Contact() {
    return (
        <section class="content">
        <div>
            <form>
                <div class="form">
                    <label>Name: </label><br></br>
                    <input type="text" name="name" required/>
                </div>
                <div class="form">
                    <label>Email: </label><br></br>
                    <input type="email" name="email" required/>
                </div>
                <div class="form">
                    <label>Message: </label><br></br>
                    <textarea name="message" required/>
                </div>
                <button class="button" type="submit">Submit</button>
            </form>
        </div>
    </section>   
    )
};

export default Contact;