import React from 'react';

// TODO: Replace with EmailJS or similar service for better email handling
function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6">Feel free to reach out via email or connect with me on LinkedIn.</p>
        {/* Contact Info */}
        <p className="mb-2">
            📧 <a href="mailto:sg59@illinois.edu" className="text-blue-600 hover:underline">sg59@illinois.edu</a>
        </p>
        <p className="mb-6">
            💼 <a href="https://linkedin.com/in/saathveek-gowrishankar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> ・ 
            💻 <a href="https://github.com/saathveek-gowrishankar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </p>
        {/* Simple Contact Form */}
        <form action="https://formspree.io/f/xanjeqav" method="POST" className="max-w-md mx-auto text-left">
            <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required className="w-full border px-3 py-2" />
            </div>
            <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className="w-full border px-3 py-2" />
            </div>
            <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required className="w-full border px-3 py-2"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
        </section>

    );
}

export default Contact;