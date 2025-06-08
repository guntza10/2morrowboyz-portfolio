import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { parseError } from "../../utils/common";

import { toast } from "sonner";

// constant value
const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChangeFormData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.target as HTMLFormElement,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setFormData(initialFormData);
      toast.success("Message sent successfully!");
    } catch (error) {
      const message = parseError(error);
      toast.error(message);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="w-full px-4 md:w-[550px]">
        <h2 className="text-gradient section-title">Get In Touch</h2>

        <form onSubmit={handleSubmitForm}>
          <input
            className="input-field mb-4"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChangeFormData}
            required
          />
          <input
            className="input-field mb-4"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChangeFormData}
            required
          />
          <textarea
            className="input-field mb-4"
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChangeFormData}
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
