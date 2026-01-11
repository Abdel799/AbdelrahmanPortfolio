import { useRef, useState } from "react";
import styles from "./Contact.module.css"
import emailjs from '@emailjs/browser';


function Contact () {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus(null);
  
      emailjs
        .sendForm(
          "service_sk3ayl8",
          "template_3gtr4tj",
          formRef.current,
          "XcZrHlApMA6lc14YS"
        )
        .then(
          () => {
            setStatus("success");
            formRef.current.reset();
          },
          (error) => {
            console.error(error);
            setStatus("error");
          }
        )
        .finally(() => setLoading(false));
    };


    return (
        <>
             <h1 className={styles.title}>Contact</h1>

            <section className={styles.contact}>
      <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="reply_to"
          placeholder="Your email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="6"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className={styles.success}>Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className={styles.error}>Something went wrong. Try again.</p>
        )}
      </form>
    </section>
        </>
    )
}

export default Contact