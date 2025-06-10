import React from 'react';

// TODO: Replace with EmailJS or similar service for better email handling
function Contact() {
    return (
        <section id="Contact" className="py-16 bg-background text-center">
            <div className="max-w-md mx-auto text-left">

                {/* Header + Description */}
                <h1 className="text-6xl font-semibold text-primary mb-6">
                    Contact Me
                </h1>
                <p className="mb-6 text-text">Have a question or an interesting opportunity? Send me a message and I'll get back to you as soon as possible!</p>

                {/* Formspree integration */}
                <form action="https://formspree.io/f/xanjeqav" method="POST" className="max-w-md mx-auto text-left">

                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="name" required
                            placeholder="Name"
                            className="w-full px-2 py-2 rounded bg-background_muted text-text" />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email" required
                            placeholder="Email"
                            className="w-full px-2 py-2 rounded bg-background_muted text-text" />
                    </div>

                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            rows="4" required
                            placeholder="Your message here..."
                            className="w-full px-2 py-2 rounded bg-background_muted text-text">
                        </textarea>
                    </div>

                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
                </form>
            </div>

            {/* Contact Info */}
            <p className="mb-2">
                📧 <a href="mailto:sg59@illinois.edu" className="text-blue-600 hover:underline">sg59@illinois.edu</a>
            </p>

            {/* Social Links */}
            <p className="mb-6">
                💼 <a href="https://linkedin.com/in/saathveek-gowrishankar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> ・
                💻 <a href="https://github.com/saathveek-gowrishankar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            </p>
        </section>

    );
}

export default Contact;