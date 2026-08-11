import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <section className="hero small-hero">
        <span className="eyebrow">● GET IN TOUCH</span>

        <h1>
          Let's <span className="gradient-text">Connect</span>
        </h1>

        <p className="hero-sub">
          Have an opportunity, a project, or just want to say hi?
          My inbox is open.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about it..."
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            required
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message →"}
          </button>

          {status === "sent" && (
            <p className="form-status success">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="form-status error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}