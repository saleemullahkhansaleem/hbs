import { useState } from "react";
import { Button } from "@/components/ui/button";
import api from "@/http/api";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    domain_key: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post("contact-us", formData)
      .then((response) => {
        if (response.success) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            domain_key: 1,
          });
          setError("");
        } else {
          setError(
            response.message ||
              "There was an issue with your submission. Please try again."
          );
        }
      })
      .catch((error) => {
        console.error(error);

        setError(error?.message || "An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return submitted ? (
    <div className="w-full max-w-lg m-auto flex flex-col items-center gap-4">
      <FaCheck size={60} className="text-green-500 mb-4" />
      <h1 className="text-2xl text-foreground">
        You message send successfully
      </h1>
      <Button variant="" asChild>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  ) : (
    <div>
      <h3 className="text-4xl font-bold mb-4">Send Us a Message</h3>
      <p className="mb-6">
        Feel free to reach out with any inquiries or questions. We're here to
        help!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full py-2 px-4 bg-primary/10 order focus:border-primary focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full py-2 px-4 bg-primary/10 order focus:border-primary focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full py-2 px-4 bg-primary/10 order focus:border-primary focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full py-2 px-4 bg-primary/10 order focus:border-primary focus:ring-2 focus:ring-primary resize-none"
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
