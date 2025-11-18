import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (sending) return;
  
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
  
    if (!name || !email || !message) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
  
    setSending(true);
    setStatus({ type: 'info', text: 'Sending message…' });
  
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', text: data.message });
        form.reset();
      } else {
        setStatus({ type: 'error', text: data.error });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Something went wrong. Please try again later.' });
    }
  
    setSending(false);
    setTimeout(() => setStatus(null), 4500);
  }

  return (
    <section className="contact section" id="contact">
      <div className="section__header">
        <h2>Contact Me</h2>
        <p className="lead">
          I’m open to freelance work, internships, and collaboration. Share a brief note about your project or role and I’ll
          follow up with availability and next steps.
        </p>
      </div>

      <form onSubmit={sendMessage} className="contact-form" noValidate>
        <label className="field">
          <input type="text" name="name" placeholder="Your Name" required />
        </label>

        <label className="field">
          <input type="email" name="email" placeholder="Your Email" required />
        </label>

        <label className="field field--textarea">
          <textarea name="message" placeholder="Your Message" required />
        </label>

        <button type="submit" className="button button--send" disabled={sending} aria-live="polite">
          <span className="btn-icon" aria-hidden="true">
            <FiSend size={16} />
          </span>
          <span className="btn-text">{sending ? 'Sendng...' : 'Send'}</span>
        </button>

        {status && (
          <div role="status" aria-live="polite" className={`form-status form-status--${status.type}`}>
            {status.text}
          </div>
        )}
      </form>

      <div className="socials">
        <a
          className="social-link"
          href="https://github.com/Gabrielle3101"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FiGithub size={18} />
        </a>

        <a
          className="social-link"
          href="https://www.linkedin.com/in/gabrielle-duere-380970377/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FiLinkedin size={18} />
        </a>

        <a
          className="social-link"
          href="mailto:godd3101@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          title="Email"
        >
          <FiMail size={18} />
        </a>
      </div>
    </section>
  );
}
