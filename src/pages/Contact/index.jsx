import Layout from "../../components/Layout";
import TextInput from "../../components/TextInput";
import "./style.css";

export default function Contact() {
  return (
    <Layout>
      <main className="contact_container">
        <section className="contact_header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </section>
        <form className="contact_form">
          <div className="form_group">
            <TextInput
              id="first_name"
              label="First name"
              placeholder="Enter your first name"
            />
            <TextInput
              id="last_name"
              label="Last name"
              placeholder="Enter your last name"
            />
          </div>
          <TextInput
            id="email"
            label="Email"
            placeholder="yourname@email.com"
            type="email"
          />
        </form>
      </main>
    </Layout>
  );
}
