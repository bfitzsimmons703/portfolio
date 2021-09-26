import React from 'react';

function Contact() {
    return (
        <section className="row">
            <h2 id="Forms">Contact</h2>
            <form className="contact-form" data-netlify="true">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Email</label>
                        <input id="email" name="email" type="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" cols="30" rows="10" required name="message"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pods">Podcast Recommendations (Optional)</label>
                        <textarea id="pods" cols="30" rows="1" name="pods" placeholder="Comma separated list..."></textarea>
                    </div>
                    <div className="form-group centered">
                        <button className="btn btn-primary" type="submit" role="button" name="submit" id="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}

export default Contact;
