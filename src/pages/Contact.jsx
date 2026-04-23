import React, { useState } from "react";
import { Mail, Linkedin , Send } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Get In Touch
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Have a project, opportunity, or question? Let’s connect.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center gap-4">
            <Mail className="text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-600 dark:text-gray-300">
                pkobenj41@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center gap-4">
            <FaLinkedin className="text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">LinkedIn</h2>
              <a
                href="https://www.linkedin.com"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/tonui-benjamin
              </a>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center gap-4">
            <FaGithub className="text-gray-800 dark:text-white" />
            <div>
              <h2 className="text-lg font-semibold">GitHub</h2>
              <a
                href="https://github.com"
                className="text-blue-500 hover:underline"
              >
                github.com/Kipkorir2017
              </a>
            </div>
          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow space-y-4"
        >

          <h2 className="text-2xl font-semibold mb-2">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white dark:bg-gray-900 border"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>

          {success && (
            <p className="text-green-500 text-center text-sm">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>
    </div>
  );
}

export default Contact;