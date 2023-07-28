import React, { useRef } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Textarea from "./UI/Textarea";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const apiKey = process.env.REACT_APP_API_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        apiKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className={classes.section}>
      <form ref={form} onSubmit={sendEmail} className={classes.contactForm}>
        <h2>Get In Touch!</h2>
        <p>
          Please feel free to message me with any opportunities, questions, or
          if you just want to chat!
        </p>
        <div className={classes.inputContainer}>
          <div className={classes.inputsBlock}>
            <Input id="name" type="text" name="name" placeholder="Name">
              Name*
            </Input>
            <Input id="email" type="email" name="email" placeholder="Email">
              Email*
            </Input>
          </div>
          <Textarea
            id="message"
            rows="4"
            cols="80"
            name="message"
            placeholder="message"
          >
            Message*
          </Textarea>
          <div className={classes.sendBtnContainer}>
            <Button type="submit">Send</Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
