import React from 'react';

function Navbar() {
    return (
        <nav className="w-full bg-background bg-opacity-60 shadow backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img 
                        src="/logo_sg.png" 
                        alt="Logo" 
                        className="h-9 w-9 object-contain drop-shadow-[0_0_2px_white]" 
                    />
                    <span className="font-greatvibes text-text text-lg sm:text-3xl">Saathveek&nbsp;Gowrishankar</span>

                    {/* <span className="font-semibold text-xl text-primary">Saathveek Gowrishankar</span> */}
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#Hero" className="text-text hover:text-primary">Home</a></li>
                    <li><a href="#About" className="text-text hover:text-primary">About</a></li>
                    <li><a href="#Skills" className="text-text hover:text-primary">Skills</a></li>
                    <li><a href="#Experience" className="text-text hover:text-primary">Experience</a></li>
                    <li><a href="#Projects" className="text-text hover:text-primary">Projects</a></li>
                    <li><a href="#Certifications" className="text-text hover:text-primary">Certifications</a></li>
                    <li><a href="#Contact" className="text-text hover:text-primary">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
