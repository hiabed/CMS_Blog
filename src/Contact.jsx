import "./Contact.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the styles!

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/myzwzkjv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("Message sent!");
      toast.success("Message sent!"); // Show a success toast
    } else {
      setStatus("Failed to send. Please try again.");
      toast.error("Failed to send. Please try again."); // Show an error toast
    }
  };

  return (
    <div id="Contact" style={{ position: "relative" }}>
      <h1 className="about" style={{ width: 367 }}>
        Contact
      </h1>
      <p>
        I'm always excited to collaborate, learn, and bring new ideas to life. Whether you have a project, a question, or just want to say hi, feel free to reach out — let's make something amazing together.
      </p>
      <div className="separator" style={{marginTop: 0}}></div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="ENTER YOUR NAME*"
          required
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ENTER YOUR EMAIL*"
          required
        />
        <label htmlFor="phone" className="sr-only">
          Phone number
        </label>
        <input type="tel" name="phone" id="phone" placeholder="PHONE NUMBER" />
        <label htmlFor="message" className="sr-only">
          message
        </label>
        <input name="message" id="message" placeholder="YOUR MESSAGE*" required />
        <input id="submit" type="submit" value="Submit" />
      </form>
      
      {/* Toast Container - This will render all the toast notifications */}
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default Contact;
