import React from 'react';

// TODO: Replace with EmailJS or similar service for better email handling
function Contact() {
    return (
        <section id="Contact" className="py-16 bg-background text-left scroll-mt-8">
            <div className="max-w-5xl mx-auto">
                {/* Section title + message */}
                <h1 className="text-6xl font-semibold text-primary mb-4">
                    Contact Me
                </h1>
                <p className="mb-12 text-text max-w-2xl">
                    Have a question or an interesting opportunity? Send me a message and I'll get back to you as soon as possible!
                </p>

                {/* Form + LinkedIn badge side by side */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left: Form */}
                    <div className="flex-1">
                        <form
                            action="https://formspree.io/f/xanjeqav"
                            method="POST"
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Name"
                                className="w-full px-2 py-2 rounded bg-background_muted text-text"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="w-full px-2 py-2 rounded bg-background_muted text-text"
                            />
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Your message here..."
                                className="w-full px-2 py-2 rounded bg-background_muted text-text"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;

