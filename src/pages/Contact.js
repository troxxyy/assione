import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <label>First Name:</label>
        <input type="text" name="firstName" /><br />
        <label>Last Name:</label>
        <input type="text" name="lastName" /><br />
        <label>Contact Number:</label>
        <input type="text" name="contactNumber" /><br />
        <label>Email Address:</label>
        <input type="email" name="email" /><br />
        <label>Message:</label>
        <textarea name="message"></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;