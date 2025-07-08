import React from 'react';
// import { motion } from 'framer-motion'; //TODO: Add animations

function Hero() {
    return (
        <section id="Hero" className="min-h-screen flex items-center justify-center p-8 bg-background">
            <div className="max-w-6xl w-full text-center relative"> {/* ✅ Made relative */}

                {/* Profile Picture */}
                <img
                    src="/saathveek_head.png"
                    alt="Saathveek"
                    className="rounded-full w-48 h-48 mx-auto mb-6 border-4 border-primary"
                />

                {/* Text */}
                <h1 className="text-5xl text-text mb-2">
                    Hello, I'm <span className="text-primary">Saathveek</span>.
                </h1>
                <h1 className="text-5xl text-text mb-8">
                    I'm a computer&nbsp;engineer and data&nbsp;scientist.
                </h1>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4">
                    {[{
                        label: "View Resume",
                        href: "/Saathveek_Gowrishankar_Resume.pdf",
                        newTab: true
                    }, {
                        label: "Contact Me",
                        href: "/#Contact",
                        newTab: false
                    }].map(({ label, href, newTab }) => (
                        <a
                            key={label}
                            href={href}
                            target={newTab ? "_blank" : undefined}
                            rel={newTab ? "noopener noreferrer" : undefined}
                            className="min-w-[11rem] text-center bg-background text-primary text-xl px-6 py-2 rounded font-semibold border-2 border-primary
                            hover:bg-primary hover:text-background transition-all duration-200 ease-in-out"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Description */}
                <div className="text-text text-xl mt-10">
                    <p>
                        Welcome! My React portfolio is currently still in progress, but I'm always happy to connect!
                    </p>
                </div>

                {/* Bouncing Arrow Button (Centered) */}
                <a
                    href="#About"
                    className="flex justify-center animate-bounce text-primary hover:text-accent transition"
                    aria-label="Scroll down"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </a>

            </div>
        </section>
    );
}

export default Hero;
