const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="w-full px-4 md:w-[550px]">
        <h2 className="text-gradient section-title">Get In Touch</h2>

        <form>
          <input
            className="input-field mb-4"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="input-field mb-4"
            name="email"
            placeholder="example@gmail.com"
            required
          />
          <textarea
            className="input-field mb-4"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />
          <button className="btn-primary w-full" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
