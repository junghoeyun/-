import React, { useRef } from "react";
import emailjs from "emailjs-com";
const EmailApi = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    const Service_ID = "service_y4raiv3";
    const Template_ID = "template_sqorybn";
    const User_ID = "odmr0vvUUkxqQq_1d";

    emailjs.sendForm(Service_ID, Template_ID, form.current, User_ID).then(
      result => alert(result.text),
      error => alert(error.text)
    );
    e.currentTarget.reset();
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EmailApi;
