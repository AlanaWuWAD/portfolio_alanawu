import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_26vocyp",    // service_id
        "template_wdvnqzs",   // template id
        formRef.current!,
        "2djeR43EginFM9-c3"     // Public Key
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setLoading(false);
        }
      );

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div id="contact" className="w-full border-y border-gray-800 p-10 text-white bg-black space-y-10">
      
      {/* Contact Form */}
      <form ref={formRef} onSubmit={sendEmail} className="max-w-3xl mx-auto w-full bg-gray-900 p-6 rounded-lg shadow-lg space-y-5 mb-20">
        <h2 className="text-2xl font-semibold text-white text-center">Leave Your Suggestions !</h2>

        <div>
          <label className="block text-lg mb-1">Title</label>
          <input
            name="title"
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label className="block text-lg mb-1">Name</label>
          <input
            name="name"
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label className="block text-lg mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <div>
          <label className="block text-lg mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-amber-500 text-black font-semibold px-6 py-2 rounded hover:bg-amber-600 transition mx-auto block"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {/* successful / failed */}
        {status === "success" && (
          <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-2">❌ Failed to send. Please try again.</p>
        )}
      </form>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-sm text-gray-300 mb-1">Email Me</h3>
          <p className="font-bold text-xl">alanawu@gmail.com</p>
        </div>

        <div>
          <h3 className="text-sm text-gray-300 mb-1">Location</h3>
          <p className="font-bold text-xl">609 W Hastings St, Vancouver, BC V6B 4W4</p>
        </div>

        <div className="flex gap-4 text-xl">
          {[GrFacebookOption, TiSocialLinkedin, BsWhatsapp, RiInstagramFill].map((Icon, idx) => (
            <div
              key={idx}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 group relative overflow-hidden cursor-pointer
              after:content-[''] after:absolute after:inset-0 after:bg-white after:rounded-full after:scale-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-105"
            >
              <Icon className="text-white relative z-10 transition-colors duration-500 group-hover:text-black" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
