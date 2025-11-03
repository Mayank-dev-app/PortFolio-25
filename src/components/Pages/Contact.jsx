import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6 font-serif">
            📬 Contact Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Have a project idea, collaboration, or just want to say hello? 
            I’d love to hear from you! Drop me a message and I’ll get back 
            as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-yellow-400 w-6 h-6" />
              <span>mayank.sharam.dev06@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="text-yellow-400 w-6 h-6" />
              <span>+91 7055084627</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-yellow-400 w-6 h-6" />
              <span>Bulandshahr, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Mayank-dev-app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank4627/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
