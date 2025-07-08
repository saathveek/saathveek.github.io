import React from 'react';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-background bg-opacity-80 shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img 
                        src="/logo_sg.png" 
                        alt="Logo" 
                        className="h-8 w-8 object-contain drop-shadow-[0_0_2px_white]" 
                    />
                    <span className="font-bold text-xl text-primary">Saathveek Gowrishankar</span>
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#Hero" className="text-text hover:text-primary">Home</a></li>
                    <li><a href="#About" className="text-text hover:text-primary">About</a></li>
                    <li><a href="#Skills" className="text-text hover:text-primary">Skills</a></li>
                    <li><a href="#Certifications" className="text-text hover:text-primary">Certifications</a></li>
                    <li><a href="#Experience" className="text-text hover:text-primary">Experience</a></li>
                    <li><a href="#Contact" className="text-text hover:text-primary">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
