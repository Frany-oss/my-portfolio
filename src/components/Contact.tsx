import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="my-12">
      <div className="bg-primary p-8 rounded-lg border border-primary/20 shadow-lg shadow-primary/10">
        <h2 className="text-2xl font-bold text-secondary-green mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-primary border border-primary/20 rounded text-dark-text focus:outline-none focus:border-secondary-blue"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-primary border border-primary/20 rounded text-dark-text focus:outline-none focus:border-secondary-blue"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 bg-primary border border-primary/20 rounded text-dark-text focus:outline-none focus:border-secondary-blue"
            rows={4}
          />
          <button
            type="submit"
            className="w-full p-2 bg-secondary-blue text-secondary-dark font-bold rounded hover:bg-secondary-green transition-colors shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
