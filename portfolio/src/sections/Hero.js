import React from 'react';
// import { motion } from 'framer-motion'; //TODO: Add animations

function Hero() {
    return (
        <section id="Hero" className="min-h-screen flex items-center justify-center p-8 bg-background">
            <div className="max-w-3xl text-center">
                
                {/* Profile Picture */}
                <img
                    src="/PFP_Front_Transparent.png"
                    alt="Saathveek"
                    className="rounded-full w-48 h-48 mx-auto mb-6 border-4 border-primary"
                />
                
                {/* Text */}
                <h1 className="text-4xl font-bold text-text">
                    Hello, I'm <span className="text-primary">Saathveek</span>.
                </h1>
                <h1 className="text-4xl font-bold text-text">
                    I'm a computer&nbsp;engineer and data&nbsp;scientist.
                </h1>

                {/* Buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-background text-primary px-4 py-2 rounded font-semibold border-2 border-primary
                                       hover:bg-primary hover:text-background hover:rounded hover:border-2 transition-colors">
                        Download Resume
                    </button>
                    <button className="bg-background text-primary px-4 py-2 rounded font-semibold border-2 border-primary
                                       hover:bg-primary hover:text-accent hover:rounded hover:border-2 transition-colors">
                        Contact Me
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Hero;