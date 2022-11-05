import { useState } from "react";
import Layout from "../../components/Layout";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Checkbox from "../../components/Checkbox";
import "./style.css";

export default function Contact() {
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [consent, setConsent] = useState(false);

  const [messageError, setMessageError] = useState();

  const name = "Moses Ogbopina";

  const handleSubmit = (e) => {
    setMessageError(undefined);
    e.preventDefault();

    if (!message) {
      setMessageError("Please enter a message");
      return;
    }

    const data = {
      first_name,
      last_name,
      email,
      message,
      consent,
    };

    console.log(data);
  };

  return (
    <Layout>
      <main className="contact_container">
        <section className="contact_header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </section>
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <TextInput
              id="first_name"
              label="First name"
              placeholder="Enter your first name"
              setValue={setFirstName}
              isRequired
            />
            <TextInput
              id="last_name"
              label="Last name"
              placeholder="Enter your last name"
              setValue={setLastName}
              isRequired
            />
          </div>
          <TextInput
            id="email"
            label="Email"
            placeholder="yourname@email.com"
            type="email"
            setValue={setEmail}
            isRequired
          />
          <TextArea
            id="message"
            label="Message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            setValue={setMessage}
            errorMessage={messageError}
          />
          <Checkbox
            id="data_collection_agreement"
            label={`You agree to providing your data to ${name} who may contact you.`}
            setValue={setConsent}
            isRequired
          />
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </main>
    </Layout>
  );
}
