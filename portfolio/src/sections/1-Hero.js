import React from 'react';

function Hero() {
    return (
        <section id="Hero" className="min-h-screen flex items-center justify-center p-8 bg-background">
            <div className="max-w-xl text-center">
                <h1 className="text-4xl font-bold text-text">
                    Hello, I'm <span className="text-primary">Saathveek</span>.
                </h1>
                <h1 className="text-4xl font-bold text-text">
                    I'm a computer engineer and data scientist.
                </h1>
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-primary text-accent px-4 py-2 rounded font-semibold">
                        Download Resume
                    </button>
                    <button className="bg-accent text-text px-4 py-2 rounded font-semibold">
                        Contact me
                    </button>
                </div>
            </div>
            <div>
                <img
                    src=""
                    alt="Saathveek"
                    className="rounded-full w-48 h-48 mx-auto mt-8 border-4 border-primary"
                />
            </div>
        </section>
    );
}

export default Hero;