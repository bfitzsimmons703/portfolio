import React, { useState } from 'react';

import { encodeForm } from '../helpers/';

const FORM_NAME = `contact-form`;

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [pods, setPods] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodeForm({
                'form-name': FORM_NAME,
                'name': name,
                'email': email,
                'message': message,
                'pods': pods,
            })
        })
            .then(() => {
                setName('');
                setEmail('');
                setMessage('');
                setPods('');
                setSubmitMessage('Thanks for submitting!');

                setTimeout(() => {
                    setSubmitMessage('');
                }, 3000);
            })
            .catch(err => {
                console.log(err);
                setSubmitMessage('Oops! Please refresh and try again.');
            });

        e.preventDefault();
    };

    return (
        <section className="row">
            <h2 id="Forms">Contact</h2>
            {/* For the netlify form parser */}
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <form className="contact-form" netlify="true" name={FORM_NAME} onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            cols="30" rows="10"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pods">Podcast Recommendations (Optional)</label>
                        <textarea
                            id="pods"
                            cols="30" rows="1"
                            name="pods"
                            placeholder="Comma separated list..."
                            value={pods}
                            onChange={e => setPods(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group centered">
                        <button className="btn btn-primary" type="submit" role="button" name="submit" id="submit">Submit</button>
                    </div>
                    <p className="submit-message">{submitMessage}</p>
                </fieldset>
            </form>
        </section>
    )
}

export default Contact;
