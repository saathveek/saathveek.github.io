import React from 'react';

function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center p-8 bg-background text-left scroll-mt-8"
    >
      {/* Title + message */}
      <div className="max-w-5xl w-full text-left">
        <h1 className="text-4xl
                       md:text-6xl 
                       font-semibold text-primary">
          Contact Me
        </h1>
        {/* <p className="text-text w-64 sm:w-80 md:w-96 md:w-[26rem] pl-1">
        Have a question or an interesting opportunity? Send me a message and I'll get back to you as soon as possible!
        </p> */}
      </div>

      {/* Content section: photo + form */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        
        {/* Left: Photo */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:h-[28rem] md:w-[26rem] flex-shrink-0 flex">
          <img
            src="/Saathveek_Gowrishankar_Photo_mic.png"
            alt="Saathveek delivering a speech at a podium"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: Form (centered to match image height) */}
        <div className="flex-1 w-full md:h-[28rem] flex items-center">
          <form
            action="https://formspree.io/f/xanjeqav"
            method="POST"
            className="w-full space-y-4"
          >
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded bg-background_muted text-text"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 rounded bg-background_muted text-text"
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your message here..."
              className="w-full px-4 py-3 rounded bg-background_muted text-text"
            />
            <button
              type="submit"
              className="bg-primary text-bg px-6 py-3 rounded font-semibold hover:bg-primary/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
