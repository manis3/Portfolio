import "./contactme.css";
import React, { useState, useRef } from "react";
// import emailjs from @emailjs/
import emailjs from "@emailjs/browser";
export const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');


    // const { name, email, message } = e.target.elements;
    // let conFom = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // };
    // console.log(conFom);

    emailjs
      .sendForm(
        "service_n9xh7j8",
        "template_fgcb0zp",
        form.current,
        "oV97jb2NTD_alXt6b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormStatus('Send');
    alert("Email sent successfully");
  };
  return (
    <div className="container mt-5">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            name="user_name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" name="user_email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            required
            name="message"
          />
        </div>
        <button className="btn btn-danger" type="submit" value="send">
          {formStatus}
        </button>
      </form>
    </div>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};
export default ContactForm;
