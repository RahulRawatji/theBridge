import React, { useState } from 'react';

import './contactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form data to your backend or a third-party service here
    // For example, using fetch to send a POST request to a server:
    // fetch('https://your-backend-or-service.com/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message }),
    // });

    // Reset the form fields after submitting
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='contactUs__container'>
    <h2 className='text-center p-1'>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </label>
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default ContactUs;